import { Request, Response, } from 'express'
import Stripe from 'stripe'

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

export class StripeService {
    static async createSession(req: Request, res: Response) {

        const { priceId } = req.body
        // @ts-ignore
        const user = req.user
        console.log('USDEEEEERRRR', user)

        // const prices = await stripe.prices.list({
        //     lookup_keys: [req.body.lookup_key],
        //     expand: ['data.product'],
        // });
        // console.log({ prices })

        const session = await stripe.checkout.sessions.create({
            mode: 'subscription',
            customer_email: user.email,
            //customer: user.id,

            line_items: [
                {
                    price: priceId,
                    // For metered billing, do not pass quantity
                    quantity: 1,
                },
            ],
            // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
            // the actual Session ID is returned in the query parameter when your customer
            // is redirected to the success page.
            success_url: `${process.env.CLIENT_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/checkout/canceled`,
        });

        console.log({ url: session.url })
        return res.json({ url: session.url });
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
            customer: checkoutSession.customer,
            return_url: returnUrl,
        });

        res.redirect(303, portalSession.url);

    }

    static async webhook(req: Request, res: Response) {
        const sig = req.headers['stripe-signature'];

        let event: Stripe.Event;

        try {
            event = stripe.webhooks.constructEvent(req.body, sig, STRIPE_KEY);
        } catch (err) {
            // On error, log and return the error message
            console.log(`❌ Error message: ${err.message}`);
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }

        // Successfully constructed event
        console.log('✅ Success:', event.id);
        console.log(event)

        // Cast event data to Stripe object
        if (event.type === 'payment_intent.succeeded') {
            const stripeObject: Stripe.PaymentIntent = event.data
                .object as Stripe.PaymentIntent;
            console.log(`💰 PaymentIntent status: ${stripeObject.status}`);
        } else if (event.type === 'charge.succeeded') {
            const charge = event.data.object as Stripe.Charge;
            console.log(`💵 Charge id: ${charge.id}`);
        } else {
            console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
        }

        // Return a response to acknowledge receipt of the event
        res.json({ received: true });
    }
}



