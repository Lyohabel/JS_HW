window.addEventListener('load', function() {
  const DOM = function() {
    this.create = function(tagName, value) {
        const elem = document.createElement(tagName, value);
        elem.innerHTML = value;
            
        return elem;
    };

    this.attr = function(elem, name, value) {
      elem.setAttribute(name, value);

      return name + ',' + ' ' + value;
    };

    this.html = function(elem, value) {
      elem.innerHTML = value;
      return value;
    };

    this.search = function(elem, selector) {
      this.child = elem.querySelector(selector);

      return child;
    };

    this.addClass = function(elem, className) {
      elem.classList.add(className);
    };

    this.removeClass = function(elem, className) {
      elem.classList.remove(className);
    };
    
    this.toggleClass = function(elem, className) {
      elem.classList.toggle(className);
    };

    this.hasClass = function(elem, className) {
      return elem.classList.contains(className);
    };
    
    this.append = function(elem, newElem, beforeElem) {
        if (beforeElem == undefined) elem.appendChild(newElem);
        else newElem.insertBefore(eleme, beforeElem);
    };

    this.on = function(elem, eventName) {
    elem.addEventListener(eventName,/*function() {} , например: */ changeColor(elem, eventName));
    };
  };

  // ---------------------------------------------

  function changeColor(elem, eventName) {
    elem.addEventListener(eventName, function() {
    elem.style.color = 'red';
  });
};
  
  const dom = new DOM();
  
  const div = dom.create('div', 'XXXXXXXXXX');

  //div.style.color = 'red';

  dom.attr(div, 'class', 'block');

  dom.append(document.body, div);

  //dom.on(div, 'click');

  console.log(div);

Func = function(elem, eventName, funcName) {
  let func2 = funcName,
      event2 = eventName;
  //this.elem.addEventListener(event2, func2());

  this.getInfo = function() {
    console.log(func2, event2);
  }
};

func = new Func(div, 'click', changeColor);

func.getInfo();

});

