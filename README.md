# Тестовое задание на позицию стажера в команду VK Market

## Задание

Создать React-приложение для корзины товаров магазина на основе компонентов-функций

### Требования

Макет из двух колонок шириной 3:1 (применить дизайн-систему или flexbox/grid в css).

#### Левая колонка

Вывод вертикального списка карточек товаров в корзине.

*Карточка товара:*
Фото товара, название (под ним описание), количество, стоимость.

*Действия с товаром:*
1. Изменить количество (кнопка с иконкой +/- и ограничением - минимум 1 товар, максимум 10).
2. Удалить (кнопка с иконкой корзины).

Для хранения состояния приложения желательно применять стейт-менеджер.
Применять можно любой из основных стейт-менеджеров: Redux, MobX, Effector&nbsp;(в крайнем случае вариант с useState/useReducer и React context API).

#### Правая колонка

Вывод текста "Итого: &lt;сумма&gt; руб." и итоговой суммы заказа по всем товарам, учитывая количества каждого твоара в корзине.

#### Данные

Данные для корзины можно сделать вручную (тестовые), или взять за основу отсюда:

https://dummyjson.com/carts/1
https://fakestoreapi.com/products

Разместить в отдельном файле.
Изменение количества товара/удаление будет производиться локально в приложении (стейт-менеджере).

#### Будет плюсом

- Применение стейт-менеджера.
- Запрос данных из API (можно и из файла, главное чтобы была асинхронная работа и работа с стейт-менеджером).
- Применение TypeScript.

#### Желательно

Применять компоненты из дизайн-системы, например VKUI / Ant Design / Material UI, но рассмотрим и варианты с чистым css (в отдельных файлах).


## Развертывание репозитория

### Клонирование

`git clone git@github.com:SKornya/vk-maket-test-task`

### Установка зависимостей

`yarn`

### Запуск

`yarn dev`
