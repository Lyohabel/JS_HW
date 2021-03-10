class Header {
    init() { 
        let element = this.create();

        this.render(element);
    }

    create() {
        let header = document.createElement('header');
        header.setAttribute('class', 'header');
        return header;
    }

    render(item) {
        let header = document.querySelector('.header'),
            app = document.querySelector('.app');
        if (header == null) {
            app.appendChild(item);
        } else {
            header.appendChild(item);
          };
    }
}

export {Header};