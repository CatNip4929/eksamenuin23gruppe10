export default {
    name: 'library_item',
    type: 'document',
    title: 'kartotek',
    fields: [
        {
            name: 'game_title',
            type: 'string',
            title: 'Spill'
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
          }
        

    ]
}