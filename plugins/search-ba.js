export default {
  help: ["ba"],
  tags: ["search"],
  command: ["ba"],

  run: async (ctx) => {
    const messageId = ctx.message?.message_id

    try {
      await ctx.replyWithPhoto(
        `${global.api}/random/ba?apikey=${apikey}`,
        {
          caption: "✨ Aquí tienes.",
          reply_to_message_id: messageId
        }
      )
    } catch (e) {
      console.error(e)
      await ctx.reply("❌ Error.", { reply_to_message_id: messageId })
    }
  }
}