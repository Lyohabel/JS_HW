import {App} from './app/app.js';

import {Header} from './app/header.js';

import {Nav} from './app/nav.js';

import {Main} from './app/main.js';

import {Footer} from './app/footer.js';

let app = new App(),
    header = new Header(),
    nav = new Nav(),
    main = new Main(),
    footer = new Footer();

app.init();

header.init();

nav.init();

main.init();

footer.init();


/*
6. На главной странице сайта по адресу http://localhost/ отобразите список
товаров, полученных из localStorage. Дизайн может быть любым.


5. В классе главного компонента реализуйте метод для получения данных из
«Fake» API сервиса https://fakestoreapi.com/products. Данные должны быть
сохранены localStorage. Если в localStorage уже есть эти данные, повторно
получать их не нужно. Метод должен быть запущен при инициализации и до
отрисовки в DOM.


4. Создайте общие структурные компоненты (Header, Nav, Main, Footer). В
каждом компоненте (в классе) должны быть реализованы методы:
• Метод create() для создания соотв. элемента со своим именем класса и сохранения его в
свойстве «element», а также для добавления в него содержимого.
• Метод init() для инициализации компонента — для вызова метода create() и возврата элемента
из метода.
Все созданные компоненты должны находится в папке «components».
Выполните экспорт элемента из объекта каждого класса с помощью метода
init(), например:
const footer = new Footer().init();
export {footer};


2. Создайте папку «components» и добавьте в нее файл App.js. В файле создайте
класс «App» (главный компонент вашего приложения) со следующими
методами:
• Метод create() для создания главного элемента «div» с классом «app» и сохранения его в
свойстве «element».
• Метод render() для добавления главного элемента в тег «body» HTML-документа и для
последующего добавления в контейнер <div class=”app”></div> других элементов из других
загруженных компонентов.
• Метод init() для инициализации главного компонента вашего приложения — для описании
будущей логики загрузки других компонентов, а также для вызова методов create() и render().
Выполните экспорт по умолчанию «анонимного» объекта вашего класса с
вызовом метода init(): export default new App().init();

Выполните экспорт по умолчанию «анонимного» объекта вашего класса с
вызовом метода init(): export default new App().init();
В файле index.js выполните импорт вашего компонента. Результатом
выполнения импорта должно быть появление в теге body контейнера <div
class=”app”></div>.

Заполните контейнер head: добавьте кодировку, заголовок и подключите
стили. CSS стили описывайте в соотв. файле style.css, добавив его в каталог css.
Выполните данные работы в методе init() главного компонента.
*/