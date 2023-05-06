export default {
    name: 'users',
    type: 'document',
    title: 'Brukere',
    fields: [
        {
            name: 'user_slug',
            type: 'slug',
            title: 'URL-tittel',
            options: {
                source: 'user_name',
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0,150)
            }
        },{
            name: 'user_id',
            type: 'number',
            title: 'bruker id'
        },
        {
            name: 'user_name',
            type: 'string',
            title: 'brukernavn'
        },
        {
            name: 'user_mail',
            type: 'email',
            title: 'E-post'
        },
        {
            name: 'user_profile_img',
            type: 'image',
            title: 'bilde'
        },
        {
            name: 'my_games',
            type: 'array',
            of: [{type: 'reference', to:{type: 'library_item'}}]
            
          }    
    ]
}