export default {
    name: 'categories',
    type: 'document',
    title: 'Kategorier',
    fields: [
        {
            name: 'category_title',
            type: 'string',
            title: 'kategorinavn'
        },
        {
            name: 'category_slug',
            type: 'slug',
            title: 'URL-tittel',
            options: {
                source: 'category_title',
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0,150)
            }
        },
        {
            name: 'category_image',
            type: 'image',
            title: 'bilde'
        },

    ]
}