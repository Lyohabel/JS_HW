class Main {
    init() { 
        let element = this.create();

        this.render(element);
    }

    create() {
        let main = document.createElement('main');
        main.setAttribute('class', 'nav');
        return main;
    }

    render(item) {
        let main = document.querySelector('.main'),
            app = document.querySelector('.app');
        if (main == null) {
            app.appendChild(item);
        } else {
            main.appendChild(item);
          };
    }
}

export {Main};