export default {

  help: ["menu"],
  tags: ["main"],
  command: ["menu", "waguri", "help", "menucompleto", "comandos", "helpcompleto", "allmenu"],

  run: async (ctx, { conn, usedPrefix }) => {
    try {
      let totalreg  = Object.keys(global.db?.data?.users || {}).length
      let totalCmds = 58
      const uptime  = clockString(process.uptime() * 1000)

      let text = `✿°•  𝗪𝗔𝗚𝗨𝗥𝗜 𝗕𝗢𝗧  •°✿
⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑
🌸 ¡Hola @${ctx.from.username || ctx.from.first_name || "Usuario"}! ⸜(｡˃ᵕ˂)⸝♡
⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑
⏱️ Uptime » ${uptime}
👥 Users » ${totalreg}
🧩 Cmds » ${totalCmds}

≡ LISTA DE MENUS

💖 HERRAMIENTAS
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
🌈 ${usedPrefix}letra

💖 DIVERSIÓN
🌈 ${usedPrefix}doxear
🌈 ${usedPrefix}facto
🌈 ${usedPrefix}piropo
🌈 ${usedPrefix}reto
🌈 ${usedPrefix}top
🌈 ${usedPrefix}iqtest
🌈 ${usedPrefix}gey

💖 ANIME
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
🌈 ${usedPrefix}sleep

💖 INTELIGENCIA ARTIFICIAL
🌈 ${usedPrefix}claude
🌈 ${usedPrefix}gemini
🌈 ${usedPrefix}GPT
🌈 ${usedPrefix}copilot
🌈 ${usedPrefix}flux

💖 STALK
🌈 ${usedPrefix}github
🌈 ${usedPrefix}instagram
🌈 ${usedPrefix}tiktok

💖 DESCARGAS
🌈 ${usedPrefix}play
🌈 ${usedPrefix}play2
🌈 ${usedPrefix}tiktoksearch
🌈 ${usedPrefix}ig
🌈 ${usedPrefix}APK
🌈 ${usedPrefix}pin
🌈 ${usedPrefix}fb
🌈 ${usedPrefix}mediafire

💖 RPG
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
🌈 ${usedPrefix}inventario

💖 ECONOMÍA
🌈 ${usedPrefix}trabajar
🌈 ${usedPrefix}balance
🌈 ${usedPrefix}pay
🌈 ${usedPrefix}rob
🌈 ${usedPrefix}deposit
🌈 ${usedPrefix}withdraw
⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑`

      try {
        let pp = './src/foto.jpg'
        await conn.replyWithPhoto(
          { source: pp },
          { caption: text }
        )
      } catch (photoErr) {
        await ctx.reply(text)
      }

    } catch (e) {
      console.error('Error en menu:', e)
      await ctx.reply('Error en el menu: ' + e.message)
    }
  }
}

function clockString(ms) {
  let seconds = Math.floor((ms / 1000) % 60)
  let minutes = Math.floor((ms / (1000 * 60)) % 60)
  let hours   = Math.floor((ms / (1000 * 60 * 60)) % 24)
  return `${hours}h ${minutes}m ${seconds}s`
}
