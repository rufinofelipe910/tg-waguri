export default {
  help: ["kick"],
  tags: ["group"],
  command: ["kick"],

  run: async (ctx) => {
    const messageId = ctx.message?.message_id

    if (ctx.chat.type === 'private') {
      return ctx.reply("Solo en grupos.", { reply_to_message_id: messageId })
    }

    let userToKick

    if (ctx.message.reply_to_message) {
      userToKick = ctx.message.reply_to_message.from.id
    }

    else if (ctx.message.entities) {
      const mention = ctx.message.entities.find(e =>
        e.type === 'mention' || e.type === 'text_mention'
      )

      if (mention) {
        if (mention.type === 'text_mention') {
          userToKick = mention.user.id
        } else {
          const username = ctx.message.text
            .substring(mention.offset, mention.offset + mention.length)
            .replace('@', '')
            .toLowerCase()

          userToKick = global.db.users[username]
        }
      }
    }

    if (!userToKick) {
      return ctx.reply(
        "No puedo expulsar a ese usuario.",
        { reply_to_message_id: messageId }
      )
    }

    try {
      const member = await ctx.getChatMember(userToKick)

      if (['administrator', 'creator'].includes(member.status)) {
        return ctx.reply("No puedes expulsar administradores.", { reply_to_message_id: messageId })
      }

      await ctx.banChatMember(userToKick)
      await ctx.unbanChatMember(userToKick)

      await ctx.reply("Usuario expulsado correctamente.", { reply_to_message_id: messageId })

    } catch (e) {
      console.error(e)
      await ctx.reply("Error: revisa permisos del bot.", { reply_to_message_id: messageId })
    }
  }
}