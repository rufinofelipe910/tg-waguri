export default {
  help: ["flux"],
  tags: ["ai"],
  command: ["flux"],

  run: async (ctx, { text }) => {
    const messageId = ctx.message?.message_id || ctx.callbackQuery?.message?.message_id;

    if (!text) {
      return ctx.reply("Especifique una descripción.", {
        reply_to_message_id: messageId
      });
    }

    await ctx.sendChatAction('upload_photo');

    try {
      const imageUrl = `https://nexevo-m2zx.onrender.com/ai/flux?prompt=${encodeURIComponent(text)}`;

      await ctx.replyWithPhoto(
        { url: imageUrl },
        {
          caption: "Imagen generada con éxito.",
          reply_to_message_id: messageId
        }
      );

    } catch (e) {
      console.error(e);
      await ctx.reply("Error al generar la imagen.", {
        reply_to_message_id: messageId
      });
    }
  }
}
