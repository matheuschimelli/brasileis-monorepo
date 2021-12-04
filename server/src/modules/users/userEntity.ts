//import { UserRole } from "@prisma/client";
import { Field, ObjectType } from "type-graphql";

@ObjectType("Profile", {
    isAbstract: true
})
export class Profile {
    @Field(_type => String, {
        nullable: false
    })
    id!: string;

    @Field(_type => String, {
        nullable: true
    })
    bio?: string | null;

    @Field(_type => String, {
        nullable: true
    })
    picture?: string | null;

    @Field(_type => String, {
        nullable: false
    })
    userId!: string;

    User?: User;
}

@ObjectType("Subscription", {
    isAbstract: true
})
export class Subscription {
    @Field(_type => String, {
        nullable: false
    })
    id!: string;

    user?: User;

    @Field(_type => Boolean, {
        nullable: false
    })
    isActive!: boolean;

    @Field(_type => String, {
        nullable: true
    })
    stripePaymentId?: string | null;

    @Field(_type => String, {
        nullable: true
    })
    stripeTransactionId?: string | null;

    @Field(_type => String, {
        nullable: false
    })
    stripeSubscriptionId!: string;

    @Field(_type => String, {
        nullable: false
    })
    customerId!: string;

    @Field(_type => Date, {
        nullable: false
    })
    startDate!: Date;

    @Field(_type => Date, {
        nullable: false
    })
    endDate!: Date;

    @Field(_type => Int, {
        nullable: true
    })
    quantity?: number | null;

    @Field(_type => Boolean, {
        nullable: true
    })
    cancelAtPeriodEnd?: boolean | null;

    @Field(_type => Date, {
        nullable: true
    })
    cancelAt?: Date | null;

    @Field(_type => Date, {
        nullable: true
    })
    canceledAt?: Date | null;

    @Field(_type => Date, {
        nullable: true
    })
    created?: Date | null;

    @Field(_type => Date, {
        nullable: true
    })
    endedAt?: Date | null;

    @Field(_type => Date, {
        nullable: true
    })
    trialStart?: Date | null;

    @Field(_type => Date, {
        nullable: true
    })
    trialEnd?: Date | null;

    @Field(_type => String, {
        nullable: true
    })
    invoiceUrl?: string | null;

    @Field(_type => String, {
        nullable: true
    })
    receiptUrl?: string | null;

    @Field(_type => String, {
        nullable: true
    })
    pdfInvoice?: string | null;

    @Field(_type => String, {
        nullable: true
    })
    urlInvoice?: string | null;

    @Field(_type => Date, {
        nullable: false
    })
    createdAt!: Date;

    @Field(_type => Date, {
        nullable: false
    })
    updatedAt!: Date;

    @Field(_type => String, {
        nullable: false
    })
    userId!: string;
}


@ObjectType("User", {
    isAbstract: true
})
export class User {
    @Field((_type) => String, {
        nullable: false
    })
    id!: string;

    @Field(_type => String, {
        nullable: true
    })
    name?: string | null;

    @Field(_type => String, {
        nullable: false
    })
    email!: string;

    @Field(_type => String, {
        nullable: true
    })
    username?: string | null;

    @Field(_type => [String], {
        nullable: false
    })
    tokens!: string[];

    @Field(_type => Boolean, {
        nullable: false
    })
    admin!: boolean;

    @Field(_type => String, {
        nullable: false
    })
    googleId!: string;

    @Field(_type => Date, {
        nullable: false
    })
    createdAt!: Date;

    @Field(_type => Date, {
        nullable: false
    })
    updatedAt!: Date;

    @Field(_type => Profile, {
        nullable: true
    })
    profile?: Profile | null;

    @Field(_type => Subscription, {
        nullable: true
    })
    subscriptions?: Subscription | null;
}
