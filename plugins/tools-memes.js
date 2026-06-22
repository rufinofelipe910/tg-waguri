import pkg from "hispamemes";
const { meme } = pkg;

export default {
  help: ["meme", "memes"],
  tags: ["tools"],
  command: ["meme", "memes"],

  run: async (ctx) => {
    const messageId = ctx.message?.message_id || ctx.callbackQuery?.message?.message_id;

    await ctx.sendChatAction("upload_photo");

    try {
      const memeUrl = meme();

      if (!memeUrl) throw new Error("No se pudo obtener el meme.");

      await ctx.replyWithPhoto(
        { url: memeUrl },
        {
          reply_to_message_id: messageId
        }
      );

    } catch (e) {
      console.error(e);
      await ctx.reply("Error al obtener el meme.", {
        reply_to_message_id: messageId
      });
    }
  }
}