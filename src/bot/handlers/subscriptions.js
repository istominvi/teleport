module.exports = (bot, query) => {
    const chatId = query.message.chat.id;
  
    const plansText = `
  📋 Доступные тарифы:
  
  1️⃣ 1 месяц — 300 ₽
  2️⃣ 3 месяца — 800 ₽
  3️⃣ 6 месяцев — 1500 ₽
  
  Выберите тариф:
    `;
  
    const options = {
      reply_markup: {
        inline_keyboard: [
          [{ text: "1 месяц — 300 ₽", callback_data: "plan_1m" }],
          [{ text: "3 месяца — 800 ₽", callback_data: "plan_3m" }],
          [{ text: "6 месяцев — 1500 ₽", callback_data: "plan_6m" }]
        ]
      }
    };
  
    bot.sendMessage(chatId, plansText, options);
  };
  