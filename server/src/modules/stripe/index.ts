import { Request, Response, } from 'express'
import Stripe from 'stripe'
import prisma from '../../lib/prisma'
import { IRequest } from '../../types';

/**
 * 
 * \stripe.exe listen --forward-to localhost:8080/api/v1/checkout/webhook
 * 
 * \Downloads\stripe_1.7.8_windows_x86_64 
 */
const YOUR_DOMAIN = process.env.SERVER_URL || 'http://localhost:8080';
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000'
const STRIPE_KEY = "whsec_ky3ZplETQIfQeUEJMvLlZeukCAXn2ufN"

const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: '2020-08-27'
})


const relevantEvents = new Set([
  'product.created',
  'product.updated',
  'price.created',
  'price.updated',
  'checkout.session.completed',
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted'
]);

export const toDateTime = (secs: number) => {
  var t = new Date('1970-01-01T00:30:00Z'); // Unix epoch start.
  t.setSeconds(secs);
  return t;
};
/**
 * Returns customer stripe id
 */
const createOrRetrieveCustomer = async ({ email, uuid, name }: { email: string; uuid: string, name: string }): Promise<string> => {
  try {
    const customer = await prisma.customer.findUnique({
      where: {
        userId: uuid
      }
    })

    if (customer) {
      const activeSubscriptions = await prisma.subscription.findFirst({
        where: {
          userId: customer.userId,
          AND: {
            isActive: true,
          }
        }
      })
      if (activeSubscriptions) {
        throw new Error("Não pode ser assinate. Já há uma assinatura em curso")
      }
      return customer.stripeId

    } else {

      const stripeCustomer = await stripe.customers.create({
        email: email,
        description: 'Usuário Brasileis',
        name: name,
      })

      const newCustomer = await prisma.customer.create({
        data: {
          user: {
            connect: {
              email
            }
          },
          stripeId: stripeCustomer.id
        }
      })
      return newCustomer.stripeId
    }
  } catch (error: any) {
    throw new Error(error)
  }
};

const manageSubscriptionStatusChange = async (subscriptionId: string, customerId: string, createAction = false) => {

  try {
    const customer = await prisma.customer.findUnique({
      where: {
        stripeId: customerId
      }
    })
    if (customer) {

      const { id, userId } = customer
      const stripeSubscription = await stripe.subscriptions.retrieve(subscriptionId, {
        expand: ['default_payment_method']
      });

      const isActive = () => {
        if (stripeSubscription.status === 'active') return true
        return false
      }

      if (isActive()) {
        await prisma.user.update({
          where: {
            id: userId
          },
          data: {
            role: 'PRO',
            isPro: true
          }
        })
      } else {
        await prisma.user.update({
          where: {
            id: userId
          },
          data: {
            role: 'USER',
            isPro: false
          }
        })
      }

      const subscription = await prisma.subscription.upsert({
        where: {
          stripeSubscriptionId: stripeSubscription.id,
        },
        create: {
          isActive: isActive(),
          user: {
            connect: {
              id: userId
            }
          },
          startDate: toDateTime(stripeSubscription.current_period_start),
          endDate: toDateTime(stripeSubscription.current_period_end),

          customerId: stripeSubscription.customer as string,
          stripeSubscriptionId: stripeSubscription.id,

          cancelAtPeriodEnd: stripeSubscription.cancel_at_period_end,
          cancelAt: stripeSubscription.cancel_at ? toDateTime(stripeSubscription.cancel_at) : null,
          canceledAt: stripeSubscription.canceled_at ? toDateTime(stripeSubscription.canceled_at) : null,

          created: toDateTime(stripeSubscription.created),
          endedAt: stripeSubscription.ended_at ? toDateTime(stripeSubscription.ended_at) : null,

        },
        update: {
          isActive: isActive(),
          user: {
            connect: {
              id: userId
            },
          },
          startDate: toDateTime(stripeSubscription.current_period_start),
          endDate: toDateTime(stripeSubscription.current_period_end),

          customerId: stripeSubscription.customer as string,
          stripeSubscriptionId: stripeSubscription.id,

          cancelAtPeriodEnd: stripeSubscription.cancel_at_period_end,
          cancelAt: stripeSubscription.cancel_at ? toDateTime(stripeSubscription.cancel_at) : null,
          canceledAt: stripeSubscription.canceled_at ? toDateTime(stripeSubscription.canceled_at) : null,

          created: toDateTime(stripeSubscription.created),
          endedAt: stripeSubscription.ended_at ? toDateTime(stripeSubscription.ended_at) : null,
        },
      })
      return subscription
    }
  } catch (error: any) {
    throw new Error(error)
  }
};

export class StripeService {
  static async createSession(req: IRequest, res: Response) {

    const { priceId } = req.body
    const user = req.user!

    try {
      const customer = await createOrRetrieveCustomer({
        uuid: user?.id,
        email: user?.email,
        name: user.name!
      });
      console.log('CUSTOMER ID', customer)

      const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        billing_address_collection: 'required',
        customer: customer,
        line_items: [
          {
            price: priceId,
            quantity: 1
          }
        ],
        allow_promotion_codes: false,
        // subscription_data: {
        //   trial_from_plan: false,
        //   metadata: req.body.metadata
        // },
        success_url: `${process.env.CLIENT_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.CLIENT_URL}/checkout/error`,
      });
      console.log('SESSION', session)

      if (!session.url) {
        return res.status(200).json({ sessionId: session.id, url: `${process.env.CLIENT_URL}/checkout/error` });
      }

      return res.status(200).json({ sessionId: session.id, url: session.url });

    } catch (err: any) {
      console.log(err);
      return res.status(200).json({ statusCode: 500, url: `${process.env.CLIENT_URL}/checkout/error` });

    }
  }

  static async createPortalSession(req: Request, res: Response) {
    // For demonstration purposes, we're using the Checkout session to retrieve the customer ID.
    // Typically this is stored alongside the authenticated user in your database.
    const { session_id } = req.body;
    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);

    // This is the url to which the customer will be redirected when they are done
    // managing their billing with the portal.
    const returnUrl = YOUR_DOMAIN;

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: checkoutSession.customer as string,
      return_url: returnUrl,
    });

    res.redirect(303, portalSession.url);

  }

  static async webhook(req: Request, res: Response) {
    const sig = req.headers['stripe-signature'];
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig as string, STRIPE_KEY);
    } catch (err: any) {
      // On error, log and return the error message
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    if (relevantEvents.has(event.type)) {
      try {
        switch (event.type) {
          case 'product.created':
          case 'product.updated':
            //await upsertProductRecord(event.data.object as Stripe.Product);
            console.log(`${event.type}`)
            break;
          case 'price.created':
          case 'price.updated':
            //await upsertPriceRecord(event.data.object as Stripe.Price);
            console.log(`${event.type}`)
            break;
          case 'customer.subscription.created':
          case 'customer.subscription.updated':
          case 'customer.subscription.deleted':
            const subscription = event.data.object as Stripe.Subscription;
            await manageSubscriptionStatusChange(
              subscription.id,
              subscription.customer as string,
              event.type === 'customer.subscription.created'
            );

            break;
          case 'checkout.session.completed':
            const checkoutSession = event.data
              .object as Stripe.Checkout.Session;
            if (checkoutSession.mode === 'subscription') {
              const subscriptionId = checkoutSession.subscription;
              await manageSubscriptionStatusChange(
                subscriptionId as string,
                checkoutSession.customer as string,
                true
              );
            }
            break;
          default:
            throw new Error('Unhandled relevant event!');
        }
      } catch (error) {
        console.log(error);
        return res
          .status(400)
          .send('Webhook error: "Webhook handler failed. View logs."');
      }
    }

    // if (event.type === 'payment_intent.succeeded') {

    //     console.log("pagamento feito com sucesso ")

    //     const stripeObject: Stripe.PaymentIntent = event.data
    //         .object as Stripe.PaymentIntent;

    //     console.log(`💰 PaymentIntent status: ${stripeObject.status}`);

    //     if (stripeObject.status === 'succeeded') {

    //         const customer = await stripe.customers.retrieve(
    //             stripeObject.customer as string
    //         ) as Stripe.Customer;

    //         if (customer) {
    //             console.log(customer)
    //         }
    //     }


    // } else if (event.type === 'charge.succeeded') {
    //     const charge = event.data.object as Stripe.Charge;
    //     console.log(`💵 Charge id: ${charge.id}`);

    // } else if (event.type === 'checkout.session.completed') {
    //     const ev = event.data.object as Stripe.Checkout.Session

    // }

    // else {
    //     console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    // }

    res.json({ received: true });
  }
}



