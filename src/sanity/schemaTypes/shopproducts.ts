import { Rule } from "sanity";


export const shopProducts = {
    name: 'shopProducts',
    title: 'ShopProducts',
    type: 'document',
    fields: [
        {
        name: 'title',
        title: 'Product Title',
        type: 'string',
        },
        {
        name: 'price',
        title: 'Price',
        type: 'number',
        },
        {
        name: 'image',
        title: 'Image',
        type: 'image',
        },
        {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            validation: (Rule: Rule) => Rule.required(),
        },
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'number',
        },
    ],
};