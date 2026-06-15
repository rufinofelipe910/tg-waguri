export default {
  help: ["ping"],
  tags: ["main"],
  command: ["ping"],

  run: async (conn, ctx) => {
    const messageId = ctx.message?.message_id
    const start = performance.now()

    let m = await conn.reply("🏓 Midiendo velocidad...", { reply_to_message_id: messageId })

    const end = performance.now()
    const speed = (end - start).toFixed(2)
    const ram = (process.memoryUsage().rss / 1024 / 1024).toFixed(0)

    await conn.editMessageText(
      `🏓 PONG

⚡ Ping: ${speed} ms
🧠 RAM: ${ram} MB
⏱️ Uptime: ${Math.floor(process.uptime())}s`,
      {
        chat_id: ctx.chat?.id,
        message_id: m.message_id
      }
    )
  }
}