const crypto = require('crypto');

const merchantLogin = process.env.ROBOKASSA_MERCHANT_LOGIN;
const password1 = process.env.ROBOKASSA_PASSWORD_1;

module.exports = async (bot, query) => {
  const chatId = query.message.chat.id;
  let amount;
  let description;

  if (query.data === 'plan_1m') {
    amount = 149;
    description = 'Подписка на 1 месяц';
  } else if (query.data === 'plan_1y') {
    amount = 1490;
    description = 'Подписка на 1 год';
  } else {
    bot.sendMessage(chatId, 'Неизвестный тарифный план.');
    return;
  }

  // Временный ID платежа (позже заменим на реальный ID из БД)
  const invId = Math.floor(Math.random() * 1000000);

  // Генерация подписи
  const signatureString = `${merchantLogin}:${amount}:${invId}:${password1}`;
  const signature = crypto.createHash('md5').update(signatureString).digest('hex');

  // Генерация ссылки на оплату
  const paymentLink = `https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=${merchantLogin}&OutSum=${amount}&InvId=${invId}&Description=${encodeURIComponent(description)}&SignatureValue=${signature}`;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Перейти к оплате', url: paymentLink }]
      ]
    }
  };

  await bot.sendMessage(chatId, `✅ Ваш тариф: <b>${description}</b>\n💵 Сумма: <b>${amount} ₽</b>\n\nНажмите кнопку ниже для оплаты:`, {
    parse_mode: 'HTML',
    reply_markup: options.reply_markup
  });
};
