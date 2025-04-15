const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config({ path: '../.env' });
const db = require('../src/db');

// Токен из .env
const token = process.env.BOT_TOKEN;

// Запускаем бота в режиме polling
const bot = new TelegramBot(token, { polling: true });

// Главное меню
const mainMenu = {
  reply_markup: {
    keyboard: [
      ['💳 Купить доступ', '📦 Мои конфиги'],
      ['👤 Профиль', '📣 Пригласить друга']
    ],
    resize_keyboard: true,
    one_time_keyboard: false
  }
};



bot.onText(/\/start(?:\s+(.+))?/, async (msg, match) => {
    const chatId = msg.chat.id;
    const telegramId = msg.from.id;
    const username = msg.from.username || null;
    const firstName = msg.from.first_name || null;
    const lastName = msg.from.last_name || null;
  
    const refCode = match[1]; // извлечённый параметр (например, ref_123456)
  
    try {
      // Проверка: существует ли пользователь?
      const userResult = await db.query(
        'SELECT * FROM users WHERE telegram_id = $1',
        [telegramId]
      );
  
      if (userResult.rows.length === 0) {
        let referredBy = null;
  
        // Проверяем, валиден ли реферальный код и не сам себя приглашает
        if (refCode && refCode.startsWith('ref_')) {
          const refUser = await db.query(
            'SELECT id FROM users WHERE referral_code = $1',
            [refCode]
          );
  
          if (refUser.rows.length > 0 && refUser.rows[0].id !== telegramId) {
            referredBy = refUser.rows[0].id;
            await db.query(
                'INSERT INTO referrals (inviter_id, invited_id) VALUES ($1, $2)',
                [refUser.rows[0].id, telegramId]
              );
              
          }
        }
  
        const referralCode = `ref_${telegramId}`;
  
        await db.query(
          `INSERT INTO users
            (telegram_id, username, first_name, last_name, referral_code, referred_by)
           VALUES ($1, $2, $3, $4, $5, $6)`,
          [telegramId, username, firstName, lastName, referralCode, referredBy]
        );
  
        console.log(`✅ Новый пользователь: ${telegramId} (реферал: ${refCode || 'нет'})`);
      } else {
        await db.query(
          'UPDATE users SET last_active = NOW() WHERE telegram_id = $1',
          [telegramId]
        );
      }
    } catch (err) {
      console.error('Ошибка при регистрации пользователя:', err);
    }
  
    bot.sendMessage(chatId, `Привет, ${firstName}! Добро пожаловать в Teleport 🚀`, mainMenu);
  });
  




// Ответы на кнопки
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '👤 Профиль') {
    bot.sendMessage(chatId, `Профиль (будет позже подключено к БД)`);
  }

  if (text === '💳 Купить доступ') {
    bot.sendMessage(chatId, `Покупка доступа (пока заглушка)`);
  }

  if (text === '📦 Мои конфиги') {
    bot.sendMessage(chatId, `Тут будут выдаваться конфиги`);
  }

  if (text === '📣 Пригласить друга') {
    bot.sendMessage(chatId, `Приглашай друзей по ссылке (будет доступна позже)`);
  }
});
