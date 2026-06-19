
export default {
  help: ["pinterest", "pin"],
  tags: ["search"],
  command: ["pinterest", "pin"],

  run: async (ctx, { text }) => {
    const messageId = ctx.message?.message_id || ctx.callbackQuery?.message?.message_id;

    if (!text) {
      return ctx.reply("Ingrese el término de búsqueda.", {
        reply_to_message_id: messageId
      });
    }

    await ctx.sendChatAction("upload_photo");

    try {
      const url = `${api}/search/pinterest?q=${encodeURIComponent(text)}&apikey=${apikey}`;
      const res = await fetch(url);

      if (!res.ok) throw new Error(`Estado de respuesta: ${res.status}`);

      const data = await res.json();

      if (!data.status || !data.result?.length) {
        throw new Error("Sin resultados.");
      }

      const item = data.result[Math.floor(Math.random() * data.result.length)];

      await ctx.replyWithPhoto(
        { url: item.image_large_url },
        {
          caption: `Resultado: ${item.titulo || "Sin título"}`,
          reply_to_message_id: messageId
        }
      );

    } catch (e) {
      console.error(e);
      await ctx.reply("Error al buscar en Pinterest.", {
        reply_to_message_id: messageId
      });
    }
  }
}