// main-menu.js - Waguri Bot (Telegram)
// Estilo visual inspirado en el menú Waguri

export default {
  help: ["menu"],
  tags: ["main"],
  command: ["menu", "help", "menú", "waguri", "menucompleto", "comandos", "allmenu"],

  run: async (ctx, { conn, usedPrefix }) => {
    let plugins = Object.values(global.plugins)
    let categorias = {}

    for (let plugin of plugins) {
      if (!plugin.help || !plugin.tags) continue
      for (let tag of plugin.tags) {
        if (!categorias[tag]) categorias[tag] = []
        for (let help of plugin.help) {
          categorias[tag].push(help)
        }
      }
    }

    let tags = {
      main: 'HERRAMIENTAS',
      ai: 'INTELIGENCIA ARTIFICIAL',
      anime: 'ANIME',
      search: 'STALK',
      dl: 'DESCARGAS',
      group: 'GRUPO',
      owner: 'OWNER',
      tools: 'UTILIDADES'
    }

    let text = `
✿°•  𝗪𝗔𝗚𝗨𝗥𝗜 𝗕𝗢𝗧  •°✿
⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑
🌸 ¡Hola @${ctx.from.username || ctx.from.first_name || 'Usuario'}! ⸜(｡˃ᵕ˂)⸝♡
⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑
⚙️ Plugins: ${plugins.length}

Grupo: ${global.group}
Canal: ${global.canal}

≡ LISTA DE MENUS
`

    for (let tag in tags) {
      if (!categorias[tag]) continue

      text += `\n💖 *${tags[tag]}*\n`

      for (let cmd of categorias[tag]) {
        text += `🌈 ${usedPrefix}${cmd}\n`
      }
    }

    text += `\n⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑`

    // Enviar como foto con caption (Telegraf)
    let pp = './src/foto.jpg'
    try {
      await ctx.replyWithPhoto(
        { source: pp },
        { caption: text, parse_mode: 'Markdown' }
      )
    } catch (e) {
      await ctx.reply(text, { parse_mode: 'Markdown' })
    }
  }
}
