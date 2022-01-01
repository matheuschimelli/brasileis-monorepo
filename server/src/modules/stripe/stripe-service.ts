import { Request, Response, } from 'express'
import Stripe from 'stripe'
import prisma from '../../lib/prisma'
import {
  createOrRetrieveCustomer,
  relevantEvents,
  manageSubscriptionStatusChange,
  stripe
} from './stripe-utils'

/**
 * 
 * .\stripe.exe listen --forward-to localhost:8080/api/v1/checkout/webhook
 * 
 * \Downloads\stripe_1.7.8_windows_x86_64 
 */
const YOUR_DOMAIN = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8080';
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000'
const STRIPE_KEY = "whsec_ky3ZplETQIfQeUEJMvLlZeukCAXn2ufN"

export const createSession = async (req: Request, res: Response) => {

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

export const createPortalSession = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id
    console.log('user id', userId)

    const userStripeId = await prisma.customer.findUnique({
      where: {
        userId: userId
      }
    })

    if (!userStripeId) return res.status(404).send()

    const returnUrl = `${process.env.CLIENT_URL}/configuracoes/minha-conta`;

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: userStripeId.stripeId,
      return_url: returnUrl,
    });

    return res.send({ url: portalSession.url })
  } catch (err: any) {
    console.log(err)
    return res.status(500).send("error")
  }

}

export const webhook = async (req: Request, res: Response) => {
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
  res.json({ received: true });
}




