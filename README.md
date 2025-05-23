# 🚀 Teleport

Сервис продажи доступа к приватным VPN-нодам через Telegram-бота.

---

## 📚 Концепция проекта

Teleport — это телеграм-бот, который позволяет пользователям быстро и безопасно получать доступ к приватным серверам для обхода блокировок.  
Пользователь оплачивает подписку и получает готовую конфигурацию для подключения через сторонние VPN-клиенты.

---

## 🏗️ Архитектура проекта

- **Core-сервер**: Node.js-приложение.
- **Telegram-бот**: node-telegram-bot-api.
- **Платежная система**: Robokassa.
- **База данных**: PostgreSQL.
- **Веб-панель администратора** (планируется): React + Express API.
- **Ноды**: Xray VPN на серверах Ubuntu 22.04 с панелью 3x-ui.

---

## 📁 Структура папок

/teleport
├── /node_modules
├── /src
│   ├── /bot
│   │   ├── index.js
│   │   ├── /handlers
│   │   │   ├── start.js
│   │   │   ├── subscriptions.js
│   │   │   ├── paymentCreate.js
│   │   │   └── paymentSuccess.js
│   ├── /database
│   │   ├── config.js
│   │   └── models
│   │       ├── user.js
│   │       ├── payment.js
│   │       └── server.js
│   ├── /controllers
│   │   └── paymentController.js
│   ├── /routes
│   │   └── payment.js
│   ├── /services
│   │   └── userService.js
├── .gitignore
├── DATABASE.md
├── README.md
├── package.json
└── server.js


---

## ⚙️ Используемые технологии

- Node.js
- Express.js
- node-telegram-bot-api
- PostgreSQL
- dotenv
- body-parser
- crypto
- Robokassa API
- 3x-ui панель для управления нодами

---

## 🛠️ Установка проекта

1. Подключиться к серверу:
    ```bash
    ssh root@45.87.247.11
    ```

2. Установить необходимые пакеты:
    ```bash
    sudo apt update && sudo apt upgrade -y
    sudo apt install git nodejs npm postgresql postgresql-contrib
    ```

3. Клонировать проект с GitHub:
    ```bash
    git clone git@github.com:istominvi/teleport.git
    cd teleport
    npm install
    ```

4. Создать `.env` файл и прописать в нём переменные:
    ```
    BOT_TOKEN=твой_токен_бота
    ROBOKASSA_MERCHANT_LOGIN=твой_логин
    ROBOKASSA_PASSWORD_1=пароль1
    ROBOKASSA_PASSWORD_2=пароль2
    PORT=3000
    ```

5. Запустить проект:
    ```bash
    node server.js
    ```

---

## 📈 Планы развития

- Создание полноценной админ-панели (React + API).
- Автоматическое добавление новых серверов-ноды.
- Интеграция поддержки новых протоколов и обфускации.
- Разработка собственного мобильного клиента для подключения.

---
