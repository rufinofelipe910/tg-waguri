export default {

  help: ["menu"],
  tags: ["main"],
  command: ["menu", "waguri", "help", "menucompleto", "comandos", "helpcompleto", "allmenu"],

  run: async (ctx, { conn, usedPrefix }) => {

    let tags = {
      main: 'HERRAMIENTAS',
      fun: 'DIVERSIÓN',
      anime: 'ANIME',
      ai: 'INTELIGENCIA ARTIFICIAL',
      stalk: 'STALK',
      dl: 'DESCARGAS',
      rpg: 'RPG',
      economy: 'ECONOMÍA'
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

    let totalreg  = Object.keys(global.db?.data?.users || {}).length
    let totalCmds = plugins.filter((v) => v.help && v.tags).length
    const uptime  = clockString(process.uptime() * 1000)

    let text = `
✿°•  𝗪𝗔𝗚𝗨𝗥𝗜 𝗕𝗢𝗧  •°✿
⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑
🌸 ¡Hola @${ctx.from.username || ctx.from.first_name}! ⸜(｡˃ᵕ˂)⸝♡
⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑
⏱️ *Uptime* » ${uptime}
👥 *Users* » ${totalreg}
🧩 *Cmds* » ${totalCmds}

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

    let pp = './src/foto.jpg'
    await conn.replyWithPhoto(
      { source: pp },
      { caption: text }
    )
  }
}

function clockString(ms) {
  let seconds = Math.floor((ms / 1000) % 60)
  let minutes = Math.floor((ms / (1000 * 60)) % 60)
  let hours   = Math.floor((ms / (1000 * 60 * 60)) % 24)
  return `${hours}h ${minutes}m ${seconds}s`
}
