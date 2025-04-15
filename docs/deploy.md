# Инструкция по развертыванию Teleport

## Требования

- Ubuntu 22.04+
- Node.js 20+
- PostgreSQL 14+
- Git
- Telegram Bot Token
- Репозиторий GitHub

---

## 1. Установка зависимостей

```bash
apt update
apt install -y git curl unzip ufw htop postgresql postgresql-contrib
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
apt install -y nodejs


2. Клонирование проекта
bash
Копировать
Редактировать
cd /opt
git clone https://github.com/istominvi/teleport.git
cd teleport
3. Настройка окружения
Создай файл .env на основе .env.example:

bash
Копировать
Редактировать
cp .env.example .env
nano .env
Пропиши:

BOT_TOKEN=...

DATABASE_URL=postgres://teleport:пароль@localhost:5432/teleport_db

4. Настройка базы данных
bash
Копировать
Редактировать
sudo -u postgres psql
Внутри psql:

sql
Копировать
Редактировать
CREATE USER teleport WITH PASSWORD 'пароль';
CREATE DATABASE teleport_db OWNER teleport;
\q
Применить права:

bash
Копировать
Редактировать
sudo -u postgres psql
\c teleport_db
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO teleport;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO teleport;
\q


5. Установка зависимостей проекта
bash
Копировать
Редактировать
npm install





6. Запуск бота
bash
Копировать
Редактировать
cd bot
node bot.js



7. Автосинхронизация (опционально)
Создай скрипт /opt/teleport/sync.sh:

bash
Копировать
Редактировать
#!/bin/bash
cd /opt/teleport
git add .
git commit -m "auto: sync from server $(date)"
git push origin main
Сделай исполняемым:

bash
Копировать
Редактировать
chmod +x sync.sh
Проект готов к работе 🚀