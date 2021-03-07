class App {
    init() {
        document.querySelector('html').setAttribute('lang', 'en'); 

        let title = document.createElement('title');
        title.innerHTML = 'xxxxx';

        let metaUtf8 = document.createElement('meta');
        metaUtf8.setAttribute('charset', 'UTF-8');

        let style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'css/style.css');

        let media = document.createElement('link');
        media.setAttribute('rel', 'stylesheet');
        media.setAttribute('href', 'css/media.css');


        document.head.appendChild(title);
        document.head.appendChild(metaUtf8);
        document.head.appendChild(style);
        document.head.appendChild(media);

        let element = this.create();

        this.render(element);
    }

    create() {
        let element = document.createElement('div');
        element.setAttribute('class', 'app');
        return element;
    }

    render(item) {
        let app = document.querySelector('.app');
        if (app == null) {
            document.body.appendChild(item);
        } else {
            app.appendChild(item);
          };
    }
}

//let init = new App().init();

//export default init;

export default new App().init();







/*
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
*/