export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
        name: 'title',
        type: 'string',
        title: 'Title',
        },
        {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
            source: 'title',
            maxLength: 96,
        },
        },
        {
        name: 'date',
        type: 'date',
        title: 'Date',
        },
        {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
            hotspot: true,
        },
        },
        {
        name: 'description',
        type: 'text',
        title: 'Description',
        },
    ],  
}