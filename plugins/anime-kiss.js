export default {
  help: ["kiss"],
  tags: ["anime"],
  command: ["kiss"],

  run: async (ctx) => {
    const messageId = ctx.message?.message_id
    const user = ctx.message?.from?.first_name || "Usuario"
    const target = ctx.message?.reply_to_message?.from?.first_name || "alguien"

    const gifs = [
      "https://raw.githubusercontent.com/Kone457/Nexus/refs/heads/main/Anime/4ff07288ee.mp4",
      "https://raw.githubusercontent.com/Kone457/Nexus/refs/heads/main/Anime/ce510b67c8.mp4",
      "https://raw.githubusercontent.com/Kone457/Nexus/refs/heads/main/Anime/aa15c6ac5c.mp4",
      "https://raw.githubusercontent.com/Kone457/Nexus/refs/heads/main/Anime/d9c3493c73.mp4"
    ]

    const gif = gifs[Math.floor(Math.random() * gifs.length)]
    const caption = `${user} besa a ${target}`

    try {
      await ctx.telegram.sendAnimation(ctx.chat.id, gif, {
        caption,
        reply_to_message_id: messageId
      })
    } catch (e) {
      console.error(e)
      await ctx.reply("Error al enviar animación.", { reply_to_message_id: messageId })
    }
  }
}