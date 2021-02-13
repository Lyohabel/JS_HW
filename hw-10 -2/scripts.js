window.addEventListener('load', function() {
/* Дополнительное задание (обязательное):
Создайте функцию-конструктор для работы с DOM, а также новый объект на
основе этого конструктора.
В объекте должны быть реализованы более простые в использовании методы по
работе с DOM:
 create(‘tagName’) для создание и возврата новых элементов по имени тега;
 attr(‘element’, ‘name’, [‘value’]) для добавления атрибута к элементу или возврата
значения атрибута;
 html(‘element’, [‘value’]) для добавления любого содержимого внутрь элемента или его
возврата;
 search(‘element’, ‘selector’) для поиска и возврата найденных элементов внутри
переданного или в document по селектору CSS.
 addClass(‘element’, ‘className’) для добавления класса к элементу;
 removeClass(‘element’, ‘className’) для удаления класса из элемента;
 toggleClass(‘element’, ‘className’) для переключения класса в элементе;
 hasClass(‘element’, ‘className’) для проверки существования класса в элементе
(должен вернуть true или false);
 append(‘element’, ‘newElement’, [‘beforeElement’]) для добавления новых элементов
внутрь какого-либо после всего его содержимого, либо перед каким-то конкретным;
 on(‘element’, ‘eventName’, ‘funcName’) для добавления к элементу события и
выполнения функции (проверьте доступность контекста this и event).
*/

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

  dom.on(div, 'click');

  console.log(div);


});

