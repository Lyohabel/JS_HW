class Nav {
    init() { 
        let element = this.create();

        this.render(element);
    }

    create() {
        let nav = document.createElement('nav');
        nav.setAttribute('class', 'nav');
        return nav;
    }

    render(item) {
        let nav = document.querySelector('.nav'),
            app = document.querySelector('.app');
        if (nav == null) {
            app.appendChild(item);
        } else {
            nav.appendChild(item);
          };
    }
}

export {Nav};