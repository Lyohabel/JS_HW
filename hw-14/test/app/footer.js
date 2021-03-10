class Footer {
    init() { 
        let element = this.create();

        this.render(element);
    }

    create() {
        let footer = document.createElement('footer');
        footer.setAttribute('class', 'footer');
        return footer;
    }

    render(item) {
        let footer = document.querySelector('.footer'),
            app = document.querySelector('.app');
        if (footer == null) {
            app.appendChild(item);
        } else {
            footer.appendChild(item);
          };
    }
}

export {Footer};