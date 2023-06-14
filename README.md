# Проект: Место
### Это учебный проект, выполненный по итогам прохождения восьмого спринта курса Web-разработчик Яндекс-Практикума.
### Проект представляет интерактивную страницу на которую можно добавить фотографии, удалить их, поставить лайк фотографиям, которые понравились. Так-же, "кликнув" по карточке с фотографией, можно открыть увеличенное изображение. Эта функциональность реализована с применением языка JavaScript.
### Прежде чем добавлять или удалять фотографии, нужно отредактировать и сохранить свой профиль.
### Это делается с помощью всплывающего окна или так называемого pop-up. Фотографии так-же добавляются с использованием всплывающего окна.
### Все pop-up можно закрыть кликом по "оверлею"(свободной области страницы) и по нажатию на клавишу Escape.
### В шестом спринте была добавлена валидация полей ввода в форме редактирования профиля и в форме добавления карточки. Если данные, которые вводит пользователь в полях ввода не соответствуют определённым критериям, будут появляться сообщения об ошибках ввода. При этом кнопки "Сохранить" и "Создать" будут не активны. Как только вводимые данные станут валидны, кнопки станут активны.
### В седьмом спринте карточки создаются с помощью класса Card. Валидация сделана на основе класса FormValidator.
### В этом спринте был выполнен большой рефакторинг кода. Добавлены классы Section, UserInfo, PopupWithForm, Popup, PopupWithImage, каждый из которых
### выполняет определённую функциональность. При этом классы взаимодействуют между собой посредством коллбэков.
#### Работа была выполнена с применением адаптивной вёрстки для разрешений 320, 768, 1024, 1280 пикселей.


[Ссылка на работу](https://anatoly-air.github.io/mesto)
