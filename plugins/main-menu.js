export default {

  help: ["help"],
  tags: ["main"], 
  command: ["menu","help","menú"],

  run: async (ctx, { conn, usedPrefix }) => {

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

    let text = `
✿°•  𝗪𝗔𝗚𝗨𝗥𝗜 𝗕𝗢𝗧  •°✿
⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑
🌸 ¡Hola! ⸜(｡˃ᵕ˂)⸝♡
⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑
⚙️ Plugins: ${plugins.length}

Grupo: ${global.fg_group}
Canal: ${global.fg_canal}

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

    //---
    let pp = './src/foto.jpg'
    await conn.replyWithPhoto(
      { source: pp },
      { caption: text }
    )
    //conn.reply(text)

  }

}
