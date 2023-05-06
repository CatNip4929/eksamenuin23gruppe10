export default {
    name: 'library_item',
    type: 'document',
    title: 'kartotek',
    fields: [
        {
            name: 'lib_slug',
            type: 'slug',
            title: 'URL-tittel',
            options: {
                source: 'game_title',
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0,150)
            }
        },
        {
            title: 'game',
            name: 'game',
            type: 'reference',
            to: [{type: 'games'}]
          },
          {
            title: 'favorite',
            name: 'favorite',
            type: 'boolean',
          },
          {
            title: 'game_time',
            name: 'gametime',
            type: 'number',
          },
        

    ]
}