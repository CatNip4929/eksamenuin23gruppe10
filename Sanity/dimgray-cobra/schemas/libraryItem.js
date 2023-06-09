export default {
  name: 'libraryItem',
  type: 'document',
  title: 'library item',
  fields: [
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
  ],
  //Henter titel fra referansen over sin game title.
  preview: {
    select:{
      title: 'game.name',
      image: 'game.background_image',
      favorite: 'favorite',
      gameTime: 'gametime'
    },
    //Gjør klar hvordan ting skal vises i hvilken rekefølge.
    //Vis en stjerne hvis itemet er favorisert, ellers ikke.
    //NB! dette vises kun i sanity studio.
    prepare: ({ title, image, favorite, gameTime}) => ({
      title: [favorite ? '⭐️ ' : '', `${title ?? `No game selected`}`].join(` `),
      subtitle: `You have played ${gameTime} hours`,
      media: image
    })
  },
}