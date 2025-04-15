# Структура проекта Teleport

Проект предназначен для автоматической выдачи конфигураций доступа к интернету через Telegram-бота. Основан на Node.js, PostgreSQL и Telegram Bot API.

## Общая структура

/opt/teleport ├── bot/ # Telegram-бот │ └── bot.js # Основная логика бота ├── src/ # Серверная логика (API и модули) │ ├── db/ # Подключение к базе данных │ │ └── index.js │ ├── routes/ # (планируется) API-маршруты │ ├── controllers/ # (планируется) Логика обработки │ └── index.js # Точка входа backend-сервера ├── .env # Переменные окружения (не публикуется) ├── .env.example # Пример переменных окружения ├── package.json # Зависимости Node.js и мета-инфо ├── sync.sh # Скрипт автоматического коммита └── docs/ # Техническая документация


## Описание ключевых компонентов

### bot/bot.js
Содержит Telegram-бот. Реализует:
- команду `/start`
- регистрацию пользователя
- реферальную систему (start=ref_...)
- отображение основного меню

### src/db/index.js
Подключение к PostgreSQL через библиотеку `pg`.
Читает строку подключения из `.env`.

### .env и .env.example
Файл `.env` содержит реальные токены и пароли, он исключён из коммита.
Файл `.env.example` нужен как шаблон:



BOT_TOKEN=your_telegram_token DATABASE_URL=postgres://user:pass@localhost:5432/dbname PORT=3000



### sync.sh
Скрипт для синхронизации изменений на GitHub.

```bash
cd /opt/teleport
git add .
git commit -m "auto: sync from server $(date)"
git push origin main
