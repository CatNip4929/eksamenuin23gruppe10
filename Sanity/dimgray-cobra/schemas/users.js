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
            name: 'my_gamesarray',
            type: 'array',
            of: [
                {
                type: 'object', 
                name: 'itemen',
                title: 'mine favoritter',
                fields: [
                    {
                        name: 'my_games',
                        title: 'mine favoritter',
                        type: 'string'    
                    },
                    {
                        name: 'arrayone',
                        title: 'mine favorittter',
                        type: 'array',
                        of:
                        [
                            {
                                name: 'games',
                                type: 'reference',
                                to: [{type: 'games'}],
                            },
                        ]
                    },
                    {
                        name: 'isFavorite',
                        type: 'boolean',
                    },
                 ]       
                },
                {
                    type: 'object',
                    name: 'My_games',
                    title: 'mine spill',
                    fields: [
                        {
                            name: 'my_games',
                            title: 'mine spill',
                            type: 'string'    
                        },
                        {
                            name: 'arraytwo',
                            title: 'mine spill',
                            type: 'array',
                            of:
                            [
                                {
                                    name: 'games',
                                    type: 'reference',
                                    to: [{type: 'games'}],
                                },
                            ]
                        },
                            ]
                },
        ] 
    },       
    ]
}
