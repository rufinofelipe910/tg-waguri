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
                { text: "✿ Información", callback_data: "menu_info" },
                { text: "✿ Buscadores", callback_data: "menu_search" }
              ],
              [
                { text: "✿ Descargas", callback_data: "menu_dl" },
                { text: "✿ Anime", callback_data: "menu_anime" }
              ],
              [
                { text: "✿ Gacha", callback_data: "menu_gacha" },
                { text: "✿ Grupo", callback_data: "menu_group" }
              ],
              [
                { text: "✿ RPG", callback_data: "menu_rpg" },
                { text: "✿ Tools", callback_data: "menu_tools" }
              ],
              [
                { text: "✿ NSFW", callback_data: "menu_nsfw" },
                { text: "✿ Owner", callback_data: "menu_owner" }
              ]
            ]
          }
        }
      )

    } catch (e) {
      console.error('Error en menu:', e)
      await ctx.reply('❌ Error al mostrar el menú')
    }
  }
}
