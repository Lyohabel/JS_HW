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

let creat = function(tagName) {
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

let div = creat('div');
document.body.appendChild(div);

let h2 = creat('h2');
div.appendChild(h2);

attr(h2, 'class', 'text');

html(h2, '67890');

let text = search(div, '.text');

addClass(div, 'new');

removeClass(div, 'item');

//toggleClass(h2, 'text');

//toggleClass(h2, 'text');

let has = hasClass(h2, 'next');

let div1 = creat('div');
addClass(div1, 'new1');

append(div, div1);

console.dir(div);
console.log(text, has);

attr(div, 'class', 'item');

changeColor(div, 'green');

let click = 'click';

on(div, click); // - после вызова этой функции появляется ошибка

});