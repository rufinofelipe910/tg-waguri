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

      const items = data.result.results.slice(0, 10);

      const mediaGroup = items.map(item => ({
        type: "document", 
        media: item.url,
        caption: `${item.title}\n👤 Autor: ${item.author}`
      }));

      await ctx.replyWithMediaGroup(mediaGroup, {
        reply_to_message_id: messageId
      });

    } catch (e) {
      console.error(e);
      await ctx.reply("Error al buscar en Tenor.", {
        reply_to_message_id: messageId
      });
    }
  }
}