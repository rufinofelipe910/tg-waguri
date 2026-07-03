export default {

  help: ["menu"],
  tags: ["main"],
  command: ["menu", "waguri", "help", "menucompleto", "comandos", "helpcompleto", "allmenu"],

  run: async (ctx, { conn }) => {
    try {
      let username = ctx.from?.username || ctx.from?.first_name || "Usuario"
      let hora = new Date().getHours()
      let saludo = hora >= 6 && hora < 12 ? "Buen día" : hora >= 12 && hora < 18 ? "Buenas tardes" : "Buenas noches"

      let caption = `✨ MENÚ PRINCIPAL\n\n🌅 ${saludo} ${username} 👑\n\nSelecciona una categoría.`

      let pp = './src/foto.jpg'

      await conn.replyWithPhoto(
        { source: pp },
        {
          caption: caption,
          reply_markup: {
            inline_keyboard: [
              [
                { text: "✿ Herramientas", callback_data: "menu_tools" },
                { text: "✿ Diversión", callback_data: "menu_fun" }
              ],
              [
                { text: "✿ Anime", callback_data: "menu_anime" },
                { text: "✿ IA", callback_data: "menu_ai" }
              ],
              [
                { text: "✿ Stalk", callback_data: "menu_stalk" },
                { text: "✿ Descargas", callback_data: "menu_dl" }
              ],
              [
                { text: "✿ RPG", callback_data: "menu_rpg" },
                { text: "✿ Economía", callback_data: "menu_economy" }
              ]
            ]
          }
        }
      )

    } catch (e) {
      console.error('Error en menu:', e)
      await ctx.reply('Error en el menu: ' + e.message)
    }
  }
}
