const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Подключение обработчиков команд
const startHandler = require('./handlers/start');
const subscriptionsHandler = require('./handlers/subscriptions');
const paymentSuccessHandler = require('./handlers/paymentSuccess');
const paymentCreateHandler = require('./handlers/paymentCreate');


// Обработка команд
bot.onText(/\/start/, (msg) => {
  startHandler(bot, msg);
});

bot.on('callback_query', (query) => {
    if (query.data === 'subscriptions') {
        subscriptionsHandler(bot, query);
    } else if (query.data === 'payment_success') {
        paymentSuccessHandler(bot, query);
    } else if (query.data === 'plan_1m' || query.data === 'plan_1y') {
        paymentCreateHandler(bot, query);
    }

})

module.exports = bot;