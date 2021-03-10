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

        this.getData();

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

    getData() {        
        fetch('https://fakestoreapi.com/products')
        .then((response) => {
              return response.json();
        })
        .then((data) => {                     

            console.log(data);

            let dataStr = JSON.stringify(data);

            //console.log(dataStr);

            if (!window.localStorage.getItem('products')) window.localStorage.setItem('products', dataStr);
        });        
    }
}

export {App};