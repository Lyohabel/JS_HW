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

let WorkDom = function(elem, tagName, className, selector, value) {
  this.elem = elem;
  this.tagName = tagName;
  this.className = className;
  this.selector = selector;
  this.value = value;

  this.creat = function(tagName) {
    this.elem = document.createElement(tagName);
    return elem;
  };

  this.creat(tagName);

}

let item = new WorkDom(item, 'div');

сonsole.log(item);

/*let creat = function(tagName) {
  this.elem = document.createElement(tagName);
  return elem;
};

let attr = function(elem, name, value) {
  elem.setAttribute(name, value);
  return name + ',' + ' ' + value;
};

let html = function(elem, value) {
  elem.innerHTML = value;
  return value;
};

let search = function(elem, selector) {
  this.child = elem.querySelector(selector);
  return child;
};

let addClass = function(elem, className) {
  elem.classList.add(className);
};

let removeClass = function(elem, className) {
  elem.classList.remove(className);
};

let toggleClass = function(elem, className) {
  elem.classList.toggle(className);
};

let hasClass = function(elem, className) {
  return elem.classList.contains(className);
};

let append = function(elem, newElem, beforeElem) {
  if (beforeElem !== undefined) {
  elem.insertBefore(newElem, beforeElem);
  } else {
    elem.appendChild(newElem);
  }
};

let changeColor = function(elem, color = 'red') {
  elem.style.backgroundColor = color;
};

let on = function(elem, eventName, funcName = changeColor()) {
  elem.addEventListener(eventName, funcName());
};

on(div, click); // - после вызова этой функции появляется ошибка
*/

});