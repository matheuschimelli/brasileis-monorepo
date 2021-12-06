import prisma from '../../lib/prisma'
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
    apiVersion: '2020-08-27'
})

export const relevantEvents = new Set([
    'product.created',
    'product.updated',
    'price.created',
    'price.updated',
    'checkout.session.completed',
    'customer.subscription.created',
    'customer.subscription.updated',
    'customer.subscription.deleted'
]);

export export const toDateTime = (secs: number) => {
    var t = new Date('1970-01-01T00:30:00Z'); // Unix epoch start.
    t.setSeconds(secs);
    return t;
};

/**
 * Returns customer stripe id
 */
export const createOrRetrieveCustomer = async ({ email, uuid, name }: { email: string; uuid: string, name: string }): Promise<string> => {
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

export const manageSubscriptionStatusChange = async (subscriptionId: string, customerId: string, createAction = false) => {

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
