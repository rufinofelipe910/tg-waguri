module.exports = {
  command: ['beso', 'kiss'],
  tag: 'fun',
  help: 'kiss',
  run: async (ctx, { conn, args }) => {
    const user = ctx.message?.from?.first_name || 'Usuario';
    const target = args[0] || 'alguien';

    const gifs = [
      "https://raw.githubusercontent.com/Kone457/Nexus/refs/heads/main/Anime/4ff07288ee.mp4",
      "https://raw.githubusercontent.com/Kone457/Nexus/refs/heads/main/Anime/ce510b67c8.mp4",
      "https://raw.githubusercontent.com/Kone457/Nexus/refs/heads/main/Anime/aa15c6ac5c.mp4",
      "https://raw.githubusercontent.com/Kone457/Nexus/refs/heads/main/Anime/d9c3493c73.mp4"
    ];

    const gif = gifs[Math.floor(Math.random() * gifs.length)];
    const caption = `${user} besa a ${target}`;

    await conn.telegram.sendAnimation(ctx.chat.id, gif, {
      caption,
      reply_to_message_id: ctx.message.message_id
    });
  }
};