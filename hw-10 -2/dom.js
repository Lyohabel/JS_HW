// const h1 = document.createElement('h1');
// h1.innerHTML = 'Welcome!';
// document.body.appendChild(h1);

// const p = document.createElement('p');
// p.innerHTML = 'Text text text...';
// document.body.appendChild(p);

// const p2 = document.createElement('p');
// p2.innerHTML = 'Text2 text text...';
// document.body.appendChild(p2);

// const button = document.createElement('button');
// button.innerHTML = 'Button';
// document.body.appendChild(button);


// const create = function(name, value) {
//     const element = document.createElement(name);
//     element.innerHTML = value;

//     return element;
// };

// const append = function(element, to, before) {
//     if (before == undefined) to.appendChild(element);
//     else to.insertBefore(element, before);
// };

// const h1 = create('h1', 'Welcome!');
// const p = create('p', 'Text text text...');
// const p2 = create('p', 'Text2 text text...');
// const button = create('button', 'Button');

// document.body.appendChild(h1);
// document.body.appendChild(p);
// document.body.appendChild(p2);
// document.body.appendChild(button);

// append(h1, document.body);
// append(p, document.body);
// append(p2, document.body);
// append(button, document.body);


const DOM = function() {
    this.create = function(name, value) {
        const element = document.createElement(name);
        element.innerHTML = value;
    
        return element;
    };
    
    this.append = function(element, to, before) {
        if (before == undefined) to.appendChild(element);
        else to.insertBefore(element, before);
    };

    this.on = function(element, eventName, functionName) {
        element.addEventListener(eventName, functionName);
    };
};

const dom = new DOM();

const h1 = dom.create('h1', 'Welcome!');
dom.append(h1, document.body);

const button = dom.create('button', 'Click');
dom.append(button, document.body);

dom.on(button, 'click', function() {
    alert('Hello!');
});