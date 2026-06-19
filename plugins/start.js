export default {
  command: ["start"],

  run: async (ctx, { usedPrefix }) => {
    const pushName = ctx.from?.first_name || ctx.from?.username || "Usuario";
    let pp = './src/fg_logo.jpg';

    await ctx.replyWithPhoto(
      { source: pp },
      {
        caption: `
┌─⊷ Bienvenido ${pushName}
▢ Usa ${usedPrefix}help para ver mi menú
▢ Owner » ${global.owner}
▢ Estado » Fase de prueba
└───────────
`,
        reply_markup: {
          inline_keyboard: [
            [{ text: "📢 Seguir Canal", url: "https://t.me/fg_canal" }]
          ]
        }
      }
    );
  }
}