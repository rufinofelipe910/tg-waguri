export default {
  help: ["llama"],
  tags: ["ai"],
  command: ["llama", "ia"],

  run: async (ctx, { text }) => {
    const messageId = ctx.message?.message_id || ctx.callbackQuery?.message?.message_id;
    const userId = ctx.from.id;

    if (!global.llamaMemory) global.llamaMemory = {};
    if (!global.llamaMemory[userId]) global.llamaMemory[userId] = [];

    if (!text) {
      return ctx.reply("Por favor, proporcione el texto o la consulta que desea procesar.", {
        reply_to_message_id: messageId
      });
    }

    await ctx.sendChatAction('typing');

    try {
      const history = global.llamaMemory[userId].join("\n");
      const prompt = `${history}\nUsuario: ${text}\nAsistente:`;

      const res = await fetch(`https://nexevo-m2zx.onrender.com/ai/llama?text=${encodeURIComponent(prompt)}`);
      
      if (!res.ok) throw new Error(`Estado de respuesta: ${res.status}`);
      
      const data = await res.json();
      const responseText = data.result || data.response || data.resultado || data.message;

      if (!responseText) throw new Error("Llama no devolvió una respuesta válida.");

      global.llamaMemory[userId].push(`Usuario: ${text}`);
      global.llamaMemory[userId].push(`Asistente: ${responseText}`);

      if (global.llamaMemory[userId].length > 10) {
        global.llamaMemory[userId] = global.llamaMemory[userId].slice(-10);
      }

      await ctx.reply(responseText, {
        reply_to_message_id: messageId
      });

    } catch (e) {
      console.error(e);
      await ctx.reply("Se ha producido un error técnico al procesar su solicitud. Por favor, intente de nuevo más tarde.", {
        reply_to_message_id: messageId
      });
    }
  }
}
