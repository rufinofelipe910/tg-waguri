export default {
  help: ["tenor"],
  tags: ["search"],
  command: ["tenor"],

  run: async (ctx, { text }) => {
    const messageId = ctx.message?.message_id || ctx.callbackQuery?.message?.message_id;

    if (!text) {
      return ctx.reply("Ingrese el término de búsqueda.", {
        reply_to_message_id: messageId
      });
    }

    await ctx.sendChatAction("upload_document");

    try {
      const url = `${api}/search/tenor?q=${encodeURIComponent(text)}&apikey=${apikey}`;
      const res = await fetch(url);

      if (!res.ok) throw new Error(`Estado de respuesta: ${res.status}`);

      const data = await res.json();

      if (!data.status || !data.result?.results?.length) {
        throw new Error("Sin resultados.");
      }

      const item = data.result.results[Math.floor(Math.random() * data.result.results.length)];

      await ctx.replyWithAnimation(
        { url: item.url },
        {
          
          reply_to_message_id: messageId
        }
      );

    } catch (e) {
      console.error(e);
      await ctx.reply("Error al buscar en Tenor.", {
        reply_to_message_id: messageId
      });
    }
  }
}