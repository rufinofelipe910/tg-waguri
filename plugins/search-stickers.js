export default {
  help: ["sticker"],
  tags: ["search"],
  command: ["sticker"],

  run: async (ctx, { text }) => {
    const messageId = ctx.message?.message_id || ctx.callbackQuery?.message?.message_id;

    if (!text) {
      return ctx.reply("Ingrese el nombre del pack de stickers.", {
        reply_to_message_id: messageId
      });
    }

    try {
      const stickerSet = await ctx.telegram.getStickerSet(text);

      if (!stickerSet || !stickerSet.stickers?.length) {
        throw new Error("No se encontró el pack.");
      }

      const sticker = stickerSet.stickers[Math.floor(Math.random() * stickerSet.stickers.length)];

      await ctx.replyWithSticker(sticker.file_id, {
        reply_to_message_id: messageId
      });

    } catch (e) {
      console.error(e);
      await ctx.reply("Error al buscar el pack de stickers.", {
        reply_to_message_id: messageId
      });
    }
  }
}