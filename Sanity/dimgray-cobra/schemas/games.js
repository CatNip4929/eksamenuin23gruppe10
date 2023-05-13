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
            name: 'game_image',
            type: 'image',
            title: 'Bilde'
        },
        {
            name: 'game_categories',
            type: 'array',
            title: 'Game category',
            of: [
              {
                  type: 'categories',
              }
            ]  
          },
        {
            name: 'game_category',
            title: 'Spillkategori',
            type: 'reference',
            to: [{type: 'categories'}]
        },
        {
            name: 'api_id',
            title: 'API_ID',
            type: 'reference',
            to: [{type: 'categories'}]
        }  
    ],
    //Hent dataen fra feltene over og sett som variabler som kan brukes i prepare.
    //lar meg vise spilldata i en array i sanity studio, på en pen måte.
    preview: {
        select: {
            image: 'game_image',
            title: 'game_title',
            developer: 'game_developers',
            date: 'game_release'
        },
        //gjør klar hvordan ting skal vises i hvilken rekefølge.
        prepare: ({image, title, developer, date}) => ({
            title,
            subtitle: `${developer}, released: (${date})`,
            media: image
        })
    }
}