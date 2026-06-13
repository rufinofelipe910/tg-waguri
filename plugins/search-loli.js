export default {
  help: ["loli"],
  tags: ["search"],
  command: ["loli"],

  run: async (ctx) => {
    const messageId = ctx.message?.message_id

    try {
      const url = "${global.api}/random/loli"

      await ctx.replyWithPhoto(url, {
        caption: "✨ Aquí tienes.",
        reply_to_message_id: messageId
      })

    } catch (e) {
      console.error(e)
      await ctx.reply("❌ Error.", { reply_to_message_id: messageId })
    }
  }
}