# Структура базы данных Teleport

Проект использует PostgreSQL. Все таблицы находятся в схеме `public`.

## Таблица users

Хранит информацию о пользователях Telegram.

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  telegram_id BIGINT UNIQUE NOT NULL,
  username TEXT,
  first_name TEXT,
  last_name TEXT,
  first_seen TIMESTAMP DEFAULT NOW(),
  last_active TIMESTAMP DEFAULT NOW(),
  referral_code TEXT UNIQUE,
  referred_by INTEGER REFERENCES users(id),
  referral_bonus_days INTEGER DEFAULT 0
);


Описание полей:
telegram_id — уникальный ID пользователя из Telegram

username — @имя

referral_code — генерируется из telegram_id, используется как start=ref_...

referred_by — ID пользователя, который пригласил

referral_bonus_days — бонусные дни, если заработал



Таблица referrals
История всех рефералов. Один пользователь может пригласить несколько других.

sql
Копировать
Редактировать
CREATE TABLE referrals (
  id SERIAL PRIMARY KEY,
  inviter_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  invited_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  paid BOOLEAN DEFAULT FALSE
);
Описание полей:
inviter_id — кто пригласил

invited_id — кто был приглашён

created_at — дата записи

paid — оплатил ли приглашённый подписку

Планируемые таблицы
В следующих этапах будут добавлены таблицы:

subscriptions — история подписок пользователей

configs — выданные конфиги с привязкой к серверам

servers — список VPN-нод и их загрузка

broadcasts — рекламные и информационные рассылки