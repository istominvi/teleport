# API Teleport

REST API предназначен для админ-панели и автоматизации взаимодействия с системой. Все запросы работают через `POST` или `GET`, ответы в формате JSON.

Базовый адрес: `http://localhost:3000/api/`

---

## Аутентификация

🔒 Пока все маршруты считаются внутренними. В будущем может быть добавлен JWT-токен или IP-фильтр.

---

## Маршруты (планируются)

### POST /api/servers/add

Добавление нового VPN-сервера в систему

**Тело запроса:**

```json
{
  "name": "US-1",
  "ip": "123.45.67.89",
  "max_users": 20,
  "notes": "Хостинг на FriendHosting"
}



Ответ:

json
Копировать
Редактировать
{
  "success": true,
  "server_id": 5
}






GET /api/servers/status
Получение текущего статуса всех серверов

Ответ:

json
Копировать
Редактировать
[
  {
    "id": 1,
    "name": "US-1",
    "ip": "123.45.67.89",
    "online": true,
    "users": 17,
    "traffic_gb": 120.4
  },
  ...
]





POST /api/payments/webhook
Webhook от Robokassa. Получает подтверждение об оплате и активирует подписку.

Поля запроса:

user_id

amount

subscription_type

Ответ:

json
Копировать
Редактировать
{
  "success": true,
  "subscription_created": true
}
GET /api/users/:id
Получение информации о пользователе (для админки)

Ответ:

json
Копировать
Редактировать
{
  "id": 2,
  "telegram_id": 7575436227,
  "username": "xprompter_ai",
  "configs": [
    {
      "server": "RU-1",
      "created_at": "2025-04-15",
      "expires_at": "2025-05-15"
    }
  ],
  "referrals": 3,
  "referral_bonus_days": 0
}
Этот файл дополняется по мере появления новых эндпоинтов.