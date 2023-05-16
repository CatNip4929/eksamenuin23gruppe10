export default {
    name: 'games',
    type: 'document',
    title: 'Spill',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Spill'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'URL-tittel',
            options: {
                source: 'name',
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
            name: 'background_image',
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
            name: 'gamescount',
            title: 'API_count',
            type: 'number',
            to: [{type: 'categories'}]
        }  
    ],
    //Hent dataen fra feltene over og sett som variabler som kan brukes i prepare.
    //lar meg vise spilldata i en array i sanity studio, på en pen måte.
    preview: {
        select: {
            image: 'background_image',
            title: 'name',
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