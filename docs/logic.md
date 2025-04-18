# Бизнес-логика проекта Teleport

## Регистрация пользователя

- При запуске бота с `/start`:
  - Проверяется наличие пользователя по `telegram_id`
  - Если нет — создаётся запись в `users`
  - Генерируется `referral_code`
  - Если передан параметр `?start=ref_...`:
    - Ищется пригласивший
    - Заполняется `referred_by`
    - Создаётся запись в `referrals`

---

## Выдача конфигурации

- После оплаты через Robokassa создаётся подписка (будет таблица `subscriptions`)
- Пользователю выдается конфигурация из сервера с наименьшей нагрузкой
- Конфигурация фиксируется в таблице `configs`

---

## Учёт трафика и слотов

- Каждому серверу можно задать лимит по количеству пользователей
- Также учитывается суммарный трафик пользователей на сервере
- При достижении лимита трафика или слотов — конфиг выдается с другого сервера

---

## Подписки

- Подписка может быть на месяц или год
- Перед окончанием срока подписки бот отправляет уведомление
- История всех подписок сохраняется в таблице `subscriptions`
- Если пользователь не продлевает — доступ блокируется

---

## Мониторинг серверов

- Серверы опрашиваются на доступность каждые 5 минут
- Если сервер не отвечает более 15 минут:
  - всем активным пользователям выдается новый конфиг
  - подписка продлевается на 3 дня
  - пользователю отправляется извинение

---

## Реферальная система

- Приглашённые пользователи попадают в таблицу `referrals`
- Если приглашённый оплатил подписку → `paid = true`
- Если у пользователя 10+ оплаченных рефералов — даётся бонус (например, месяц бесплатно)

---

## Рассылки

- Админ может создать рассылку (таблица `broadcasts`)
- Сообщение отправляется всем активным пользователям
- Поддерживаются сегменты: активные, неоплатившие, рефералы и т.д.
