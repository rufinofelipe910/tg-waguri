export default {

  help: [],
  tags: ["main"],
  command: [],

  run: async (ctx, { conn }) => {
    if (!ctx.callbackQuery) return

    let data = ctx.callbackQuery.data
    let username = ctx.from?.username || ctx.from?.first_name || "Usuario"

    let menus = {
      menu_info: {
        title: "✨ INFORMACIÓN",
        cmds: `🌈 ping
🌈 uptime
🌈 bots
🌈 creador
🌈 repo
🌈 link
🌈 reg`
      },
      menu_search: {
        title: "✨ BUSCADORES",
        cmds: `🌈 github
🌈 instagram
🌈 tiktok
🌈 search-ba
🌈 search-loli
🌈 search-pinterest
🌈 search-stickers
🌈 search-tenor`
      },
      menu_dl: {
        title: "✨ DESCARGAS",
        cmds: `🌈 play
🌈 play2
🌈 tiktoksearch
🌈 ig
🌈 APK
🌈 pin
🌈 fb
🌈 mediafire
🌈 dl-yta
🌈 dl-ytv
🌈 dl-play
🌈 dl-tiktok`
      },
      menu_anime: {
        title: "✨ ANIME",
        cmds: `🌈 bath
🌈 bite
🌈 blush
🌈 bored
🌈 buenas-noches
🌈 buenos-dias
🌈 cry
🌈 dance
🌈 fumar
🌈 hug
🌈 kiss
🌈 pensar
🌈 sacred
🌈 slap
🌈 sleep
🌈 anime-kiss`
      },
      menu_gacha: {
        title: "✨ GACHA",
        cmds: `🌈 gacha
🌈 gacha-roll
🌈 gacha-inventory
🌈 gacha-trade`
      },
      menu_group: {
        title: "✨ GRUPO",
        cmds: `🌈 autoadmin
🌈 demote
🌈 leave
🌈 tag
🌈 invocar
🌈 kick
🌈 antilink
🌈 del
🌈 join
🌈 group-kick`
      },
      menu_rpg: {
        title: "✨ RPG",
        cmds: `🌈 cazar
🌈 contratos
🌈 aceptar
🌈 completar
🌈 perfil
🌈 diario
🌈 minar
🌈 transferir
🌈 taller
🌈 comprar
🌈 comprar.boy
🌈 item
🌈 vender
🌈 duelo
🌈 hack
🌈 best
🌈 estadisticas
🌈 inventario`
      },
      menu_tools: {
        title: "✨ TOOLS",
        cmds: `🌈 logotipo
🌈 setbanner
🌈 setcurrency
🌈 setname
🌈 setprimary
🌈 reload
🌈 setprefijo
🌈 quitarpref
🌈 update
🌈 sticker
🌈 emojimix
🌈 letra
🌈 tools-memes`
      },
      menu_nsfw: {
        title: "✨ NSFW",
        cmds: `🌈 nsfw
🌈 nsfw-image
🌈 nsfw-video`
      },
      menu_owner: {
        title: "✨ OWNER",
        cmds: `🌈 owner-reset
🌈 owner-update
🌈 main-ping
🌈 main-menu
🌈 start
🌈 test`
      }
    }

    if (menus[data]) {
      let text = `${menus[data].title}\n\n${menus[data].cmds}\n\n⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑`

      await ctx.editMessageText(text, {
        reply_markup: {
          inline_keyboard: [
            [{ text: "⬅️ Volver al Menú", callback_data: "menu_back" }]
          ]
        }
      })
    }

    if (data === "menu_back") {
      let hora = new Date().getHours()
      let saludo = hora >= 6 && hora < 12 ? "Buen día" : hora >= 12 && hora < 18 ? "Buenas tardes" : "Buenas noches"

      let caption = `✨ MENÚ PRINCIPAL\n\n🌅 ${saludo} ${username} 👑\n\nSelecciona una categoría.`

      await ctx.editMessageCaption(caption, {
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
            ],
            [
              { text: "✿ Owner", url: "https://t.me/tuusuario" }
            ]
          ]
        }
      })
    }

    await ctx.answerCbQuery()
  }
}
