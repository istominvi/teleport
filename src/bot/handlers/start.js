module.exports = (bot, msg) => {
    const chatId = msg.chat.id;

//     const { chat_id, username } = msg.from;
// const subscription_type = 'basic';

// User.create({ chat_id, username, subscription_type })
//   .then(() => {
//     bot.sendMessage(chat_id, 'Вы успешно зарегистрированы!');
//   })
//   .catch((error) => {
//     console.error('Error creating user:', error);
//   });
  
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