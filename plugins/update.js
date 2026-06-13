import { exec } from "child_process"

export default {
  help: ["update"],
  tags: ["owner"],
  command: ["update"],

  run: async (ctx) => {
    const messageId = ctx.message?.message_id

    try {
      await ctx.reply("⚙️ Iniciando actualización...", { reply_to_message_id: messageId })

      exec("git pull && npm install", (error, stdout, stderr) => {
        if (error) {
          console.error(error)
          return ctx.reply("❌ Error al actualizar: revisa permisos o configuración.", { reply_to_message_id: messageId })
        }

        if (stderr) console.error(stderr)

        ctx.reply(`✅ Actualización completada.\n\`\`\`${stdout}\`\`\``, { reply_to_message_id: messageId })
      })
    } catch (e) {
      console.error(e)
      await ctx.reply("❌ Fallo inesperado durante la actualización.", { reply_to_message_id: messageId })
    }
  }
}