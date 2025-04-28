module.exports = (bot, msg) => {
    const chatId = msg.chat.id;
  
    const welcomeText = `
  👋 Добро пожаловать в Teleport!
  
  🚀 Здесь вы можете получить безопасный доступ к интернету.
  
  🛡️ Выберите подписку и начните пользоваться.
  
  Нажмите кнопку ниже, чтобы выбрать подписку:
    `;
  
    const options = {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Выбрать подписку", callback_data: "subscriptions" }]
        ]
      }
    };
  
    bot.sendMessage(chatId, welcomeText, options);
  };