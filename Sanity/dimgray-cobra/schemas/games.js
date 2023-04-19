export default {
    name: 'games',
    type: 'document',
    title: 'Spill',
    fields: [
        {
            name: 'game_title',
            type: 'string',
            title: 'Spill'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'URL-tittel',
            options: {
                source: 'game_title',
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0,150)
            }
        },
        {
            name: 'game_rating',
            type: 'number',
            title: 'Rating'
        },
        {
            name: 'game_plot',
            type: 'text',
            title: 'Oppsumering'
        },
        {
            name: 'game_tags',
            type: 'string',
            title: 'Stikkord'
        },
        {
            name: 'game_developers',
            type: 'string',
            title: 'Utviklere'
        },
        {
            name: 'game_publisher',
            type: 'string',
            title: 'Utgiver'
        },
        {
            name: 'game_release',
            type: 'date',
            title: 'Utgivelsesår'
        },
        {
            name: 'game_platforms',
            type: 'string',
            title: 'Plattformer'
        },
        {
            name: 'game_stores',
            type: 'string',
            title: 'Kjøpsmuligheter'
        },
        {
            name: 'game_time',
            type: 'string',
            title: 'Timer-Spilt'
        },
        {
            name: 'game_image',
            type: 'image',
            title: 'Bilde'
        },
        {
            name: 'game_category',
            title: 'Spillkategori',
            type: 'reference',
            to: [{type: 'categories'}]
        }

            
        
    ]
}