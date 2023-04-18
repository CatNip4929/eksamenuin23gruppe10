export default {
    name: 'games',
    type: 'document',
    title: 'spill-navn',
    fields: [
        {
            name: 'games_title',
            type: 'string',
            title: 'Spill-navn'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'URL-tittel',
            options: {
                source: 'games_title',
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0,150)
            }
        },
        {
            name: 'games_rating',
            type: 'number',
            title: 'vurdering'
        },
        {
            name: 'game_image',
            type: 'image',
            title: 'game_poster'
        },
        {
            name: 'game_category',
            title: 'spillkategori',
            type: 'reference',
            to: [{type: 'categories'}]
        }

            
        
    ]
}