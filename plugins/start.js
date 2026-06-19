export default {
  command: ["start"],

  run: async (ctx, { conn, usedPrefix }) => {
    const pushName = ctx.from?.first_name || ctx.from?.username || "Usuario";
    let pp = './src/fg_logo.jpg';

    await conn.sendMessage(ctx.chat, {
      image: { url: pp },
      caption: `
┌─⊷ Bienvenido ${pushName}
▢ ${usedPrefix}help » Ver menú del bot
▢ Owner » ${global.owner}
▢ Estado » Fase de prueba
└───────────
`,
      reply_markup: {
        inline_keyboard: [
          [
            { text: "📢 Seguir Canal", url: "https://t.me/fg_canal" }
          ]
        ]
      }
    });
  }
}