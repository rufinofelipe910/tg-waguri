export default {
  help: ["reset"],
  tags: ["owner"],
  command: ["reset", "reiniciar"],

  run: async (ctx) => {
    const messageId = ctx.message?.message_id
    const senderId = String(ctx.from?.id)

    if (!global.ownerID.includes(senderId)) {
      return ctx.reply("⛔ No tienes permisos para usar este comando.", { reply_to_message_id: messageId })
    }

    try {
      await ctx.reply("🔄 Reiniciando...", { reply_to_message_id: messageId })

      setTimeout(() => {
        process.exit(0)
      }, 3000)
    } catch (e) {
      console.error(e)
      await ctx.reply("❌ Fallo inesperado durante el reinicio.", { reply_to_message_id: messageId })
    }
  }
}