// This is the schema for the blog collection in Sanity

export const blog ={
    name: 'blog',
    title: 'Blogs',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            },
        {
        name: 'title',
        title: 'Title',
        type: 'string',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
        },
        {
        name: 'description',
        title: 'Description',
        type: 'text',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: (Rule: any) => Rule.required(),
        },
        
    ],
}