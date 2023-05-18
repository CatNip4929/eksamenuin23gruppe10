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
            title: 'category',
            name: 'category',
            type: 'reference',
            to: [{type: 'categories'}]
          },
    ]
}

//Kilde: https://www.sanity.io/docs/schemas-and-forms