import { InputType, Field, ObjectType } from 'type-graphql'
import { ArrayMinSize, ArrayMaxSize } from 'class-validator'


@InputType()
export class LawSearchInput {
    @Field({ nullable: false })
    term!: string;

    @Field({ nullable: false })
    page?: string;

    @Field(() => [String], { nullable: false })
    @ArrayMinSize(1)
    categories?: string[];

    @Field(() => [String], { nullable: false })
    @ArrayMinSize(1)
    subCategories?: string[];
}

// @ObjectType()
// export class SearchResult {
//     @Field()
//     results: any;

//     @Field()
//     total: any;

//     @Field()
//     searchResults?: undefined;
// }

@InputType()
export class CreateLawInput {
    @Field({ nullable: false })
    url!: string;

    @Field({ nullable: false })
    title!: string;

    @Field({ nullable: true })
    htmlContent!: string;


    @Field({ nullable: true })
    textContent!: string;

    @Field({ nullable: true })
    contentHtmlSelector!: string;

    @Field({ nullable: false })
    crawlerId!: string;

    @Field(() => [String], { nullable: false })
    @ArrayMinSize(1)
    categories!: string[];

    @Field(() => [String], { nullable: false })
    @ArrayMinSize(1)
    subCategories!: string[];

    // @Field(() => [String], { nullable: false })
    // @ArrayMinSize(1)
    // @ArrayMaxSize(1)
    // crawler?: string[];
}

@InputType()
export class UpdateLawInput {
    @Field({ nullable: false })
    title!: string;

    @Field({ nullable: true })
    htmlContent!: string;

    @Field({ nullable: true })
    contentHtmlSelector!: string;

    @Field({ nullable: true })
    updateDiff!: string;

    @Field({ defaultValue: true })
    published!: boolean;

    @Field({ nullable: true })
    tipo!: string

    @Field({ nullable: true })
    numero!: string

    @Field({ nullable: true })
    orgao!: string

    @Field({ nullable: true })
    dataPublicacao!: Date

    @Field({ nullable: true })
    ementa!: string

    @Field(() => [String], { nullable: false })
    @ArrayMinSize(1)
    categories?: string[];

    @Field(() => [String], { nullable: false })
    @ArrayMinSize(1)
    subCategories?: string[];

    @Field(() => [String], { nullable: false })
    @ArrayMinSize(1)
    @ArrayMaxSize(1)
    crawler?: string[];
}
