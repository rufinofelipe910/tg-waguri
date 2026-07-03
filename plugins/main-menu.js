export default {

  help: ["menu"],
  tags: ["main"],
  command: ["menu", "waguri", "help", "menucompleto", "comandos", "helpcompleto", "allmenu"],

  run: async (ctx, { conn }) => {

    let totalreg  = Object.keys(global.db?.data?.users || {}).length
    let totalCmds = 58
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

💖 *HERRAMIENTAS*
🌈 ping
🌈 autoadmin
🌈 demote
🌈 leave
🌈 tag
🌈 invocar
🌈 logotipo
🌈 setbanner
🌈 setcurrency
🌈 setname
🌈 setprimary
🌈 bots
🌈 reload
🌈 setprefijo
🌈 quitarpref
🌈 update
🌈 kick
🌈 antilink
🌈 del
🌈 join
🌈 reg
🌈 creador
🌈 repo
🌈 link
🌈 sticker
🌈 emojimix
🌈 letra

💖 *DIVERSIÓN*
🌈 doxear
🌈 facto
🌈 piropo
🌈 reto
🌈 top
🌈 iqtest
🌈 gey

💖 *ANIME*
🌈 bath
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

💖 *INTELIGENCIA ARTIFICIAL*
🌈 claude
🌈 gemini
🌈 GPT
🌈 copilot
🌈 flux

💖 *STALK*
🌈 github
🌈 instagram
🌈 tiktok

💖 *DESCARGAS*
🌈 play
🌈 play2
🌈 tiktoksearch
🌈 ig
🌈 APK
🌈 pin
🌈 fb
🌈 mediafire

💖 *RPG*
🌈 cazar
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
🌈 inventario

💖 *ECONOMÍA*
🌈 trabajar
🌈 balance
🌈 pay
🌈 rob
🌈 deposit
🌈 withdraw
⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑`

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
