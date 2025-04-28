require('dotenv').config();
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Teleport API работает!');
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Добро пожаловать в Teleport! 🚀 Выберите тариф, чтобы начать.");
});

app.post('/payment/notification', async (req, res) => {
  try {
    const { OutSum, InvId, SignatureValue } = req.body;
    const secretPassword = process.env.ROBOKASSA_PASSWORD_2;

    const hash = crypto.createHash('md5').update(`${OutSum}:${InvId}:${secretPassword}`).digest('hex').toUpperCase();

    if (hash === SignatureValue.toUpperCase()) {
      console.log('✅ Платёж успешно подтвержден:', InvId);
      res.send(`OK${InvId}`);
    } else {
      console.error('⛔ Неверная подпись платежа');
      res.status(401).send('Неверная подпись');
    }
  } catch (error) {
    console.error('❌ Ошибка обработки платежа:', error);
    res.status(500).send('Ошибка сервера');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
});