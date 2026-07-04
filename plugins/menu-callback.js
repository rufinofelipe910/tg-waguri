import fs from 'fs'

export default {

  help: [],
  tags: ["main"],
  command: [
    "menu_tools",
    "menu_fun",
    "menu_anime",
    "menu_ai",
    "menu_stalk",
    "menu_dl",
    "menu_rpg",
    "menu_economy",
    "menu_back"
  ],

  run: async (ctx, { conn, usedPrefix }) => {

    let data = ctx.callbackQuery?.data

    if (!data) return

    let menus = {
      menu_tools: `✨ HERRAMIENTAS

🌈 ${usedPrefix}ping
🌈 ${usedPrefix}autoadmin
🌈 ${usedPrefix}demote
🌈 ${usedPrefix}leave
🌈 ${usedPrefix}tag
🌈 ${usedPrefix}invocar
🌈 ${usedPrefix}logotipo
🌈 ${usedPrefix}setbanner
🌈 ${usedPrefix}setcurrency
🌈 ${usedPrefix}setname
🌈 ${usedPrefix}setprimary
🌈 ${usedPrefix}bots
🌈 ${usedPrefix}reload
🌈 ${usedPrefix}setprefijo
🌈 ${usedPrefix}quitarpref
🌈 ${usedPrefix}update
🌈 ${usedPrefix}kick
🌈 ${usedPrefix}antilink
🌈 ${usedPrefix}del
🌈 ${usedPrefix}join
🌈 ${usedPrefix}reg
🌈 ${usedPrefix}creador
🌈 ${usedPrefix}repo
🌈 ${usedPrefix}link
🌈 ${usedPrefix}sticker
🌈 ${usedPrefix}emojimix
🌈 ${usedPrefix}letra`,

      menu_fun: `✨ DIVERSIÓN

🌈 ${usedPrefix}doxear
🌈 ${usedPrefix}facto
🌈 ${usedPrefix}piropo
🌈 ${usedPrefix}reto
🌈 ${usedPrefix}top
🌈 ${usedPrefix}iqtest
🌈 ${usedPrefix}gey`,

      menu_anime: `✨ ANIME

🌈 ${usedPrefix}bath
🌈 ${usedPrefix}bite
🌈 ${usedPrefix}blush
🌈 ${usedPrefix}bored
🌈 ${usedPrefix}buenas-noches
🌈 ${usedPrefix}buenos-dias
🌈 ${usedPrefix}cry
🌈 ${usedPrefix}dance
🌈 ${usedPrefix}fumar
🌈 ${usedPrefix}hug
🌈 ${usedPrefix}kiss
🌈 ${usedPrefix}pensar
🌈 ${usedPrefix}sacred
🌈 ${usedPrefix}slap
🌈 ${usedPrefix}sleep`,

      menu_ai: `✨ INTELIGENCIA ARTIFICIAL

🌈 ${usedPrefix}claude
🌈 ${usedPrefix}gemini
🌈 ${usedPrefix}GPT
🌈 ${usedPrefix}copilot
🌈 ${usedPrefix}flux`,

      menu_stalk: `✨ STALK

🌈 ${usedPrefix}github
🌈 ${usedPrefix}instagram
🌈 ${usedPrefix}tiktok`,

      menu_dl: `✨ DESCARGAS

🌈 ${usedPrefix}play
🌈 ${usedPrefix}play2
🌈 ${usedPrefix}tiktoksearch
🌈 ${usedPrefix}ig
🌈 ${usedPrefix}APK
🌈 ${usedPrefix}pin
🌈 ${usedPrefix}fb
🌈 ${usedPrefix}mediafire`,

      menu_rpg: `✨ RPG

🌈 ${usedPrefix}cazar
🌈 ${usedPrefix}contratos
🌈 ${usedPrefix}aceptar
🌈 ${usedPrefix}completar
🌈 ${usedPrefix}perfil
🌈 ${usedPrefix}diario
🌈 ${usedPrefix}minar
🌈 ${usedPrefix}transferir
🌈 ${usedPrefix}taller
🌈 ${usedPrefix}comprar
🌈 ${usedPrefix}comprar.boy
🌈 ${usedPrefix}item
🌈 ${usedPrefix}vender
🌈 ${usedPrefix}duelo
🌈 ${usedPrefix}hack
🌈 ${usedPrefix}best
🌈 ${usedPrefix}estadisticas
🌈 ${usedPrefix}inventario`,

      menu_economy: `✨ ECONOMÍA

🌈 ${usedPrefix}trabajar
🌈 ${usedPrefix}balance
🌈 ${usedPrefix}pay
🌈 ${usedPrefix}rob
🌈 ${usedPrefix}deposit
🌈 ${usedPrefix}withdraw`
    }

    // MENÚ DE CATEGORÍA → en vez de editar, mandamos mensaje nuevo
    if (menus[data]) {
      await ctx.telegram.sendChatAction(ctx.chat.id, 'typing')
      await ctx.reply(menus[data], {
        reply_markup: {
          inline_keyboard: [
            [{ text: "⬅️ Volver al Menú", callback_data: "menu_back" }]
          ]
        }
      })
      return
    }

    // VOLVER AL MENÚ PRINCIPAL → también mensaje nuevo
    if (data === "menu_back") {
      let username = ctx.from?.username || ctx.from?.first_name || "Usuario"
      let hora = new Date().getHours()
      let saludo = hora >= 6 && hora < 12 ? "Buen día" : hora >= 12 && hora < 18 ? "Buenas tardes" : "Buenas noches"

      let caption = `✨ MENÚ PRINCIPAL\n\n🌅 ${saludo} ${username} 👑\n\nSelecciona una categoría.`

      await ctx.replyWithPhoto(
        { source: fs.createReadStream('./src/foto.jpg') },
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
    }
  }
}
