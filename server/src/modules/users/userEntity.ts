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

@ObjectType("Membership", {
    isAbstract: true
})
export class Membership {
    @Field(_type => String, {
        nullable: false
    })
    id!: string;

    user?: User;

    @Field(_type => Boolean, {
        nullable: false
    })
    isActive!: boolean;

    @Field(_type => Date, {
        nullable: false
    })
    startDate!: Date;

    @Field(_type => Date, {
        nullable: false
    })
    endDate!: Date;

    @Field(_type => String, {
        nullable: false
    })
    stripeTransactionId!: string;

    @Field(_type => String, {
        nullable: false
    })
    customerId!: string;

    @Field(_type => String, {
        nullable: false
    })
    invoiceUrl!: string;

    @Field(_type => String, {
        nullable: false
    })
    subscriptionId!: string;

    @Field(_type => String, {
        nullable: false
    })
    receiptUrl!: string;

    @Field(_type => String, {
        nullable: false
    })
    pdfInvoice!: string;

    @Field(_type => String, {
        nullable: false
    })
    urlInvoice!: string;

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

    @Field(_type => Membership, {
        nullable: true
    })
    membership?: Membership | null;
}
