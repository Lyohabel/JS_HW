/* 
Используя полученные знания, создайте новый объект, который будет
наследовать свойства и методы объекта, созданного из предыдущего домашнего
задания по объектам (ДЗ №7). Выполните прототипное и функциональное
наследование на выбор. Модифицируйте (доработайте) любой из методов
родителя в его потомке.
Дополнительное задание (обязательное):
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
 addClass(‘element’, ‘className’) для добавления класса к элементу;
 hasClass(‘element’, ‘className’) для проверки существования класса в элементе
(должен вернуть true или false);
 append(‘element’, ‘newElement’, [‘beforeElement’]) для добавления новых элементов
внутрь какого-либо после всего его содержимого, либо перед каким-то конкретным;
 on(‘element’, ‘eventName’, ‘funcName’) для добавления к элементу события и
выполнения функции (проверьте доступность контекста this и event).
*/

let Calc = function() {
  this.start = function() {
    alert('Здравствуйте! Это программа-калькулятор.');
    this.get();
  };

  this.get = function(){
        this.a = +prompt('Введите число а');
        this.oper = prompt('Введите операцию: +, -, *, /, **, √');
        if (this.oper != '√') {
        this.b = +prompt('Введите число b');
        };    
  
        this.operation();
  };
  
  this.operation = function() {
    switch(this.oper) {
      case '+':
        this.result = this.a + this.b;
      break;
  
      case '-':
        this.result = this.a - this.b;
      break;
  
      case '*':
        this.result = this.a * this.b;
      break;
  
      case '/':
        this.result = this.a / this.b;
      break;

      case '**':
        this.result = Math.pow(this.a, this.b);
      break;

      case '√':
        this.result = Math.sqrt(this.a);
      break;
  
      default: this.result = 0;
    }; 
  
    this.show();
  };
  
  this.show = function() {
        if(this.oper == '√') {
            alert(this.oper + ' ' + this.a + ' = ' + this.result);
        } else {        
            alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
          }; 

    this.continue();
    
  };

  this.continue = function() {
    if (confirm('Продолжить вычисления?')) {
      this.get();
    } else {
      alert('Спасибо за внимание!');
    };
  }  
};
  
let calc = new Calc();
//calc.start();

let counter1 = 0,
    counter2 = 0,
    counter3 = 0;

let Vote = function() {
  this.start = function() {
    if (confirm('Вы согласны принять участие в пользовательском голосорвании?')) {
      this.choice();
    } else { alert('Извините за беспокойство!');
      };
  };

  this.choice = function() {
    alert(`Выберите автора лучшей фотографии:
    Алексей Аверченко, №1,
    Светлана Ушакова, №2,
    Сергей Хомич, №3.`);
    
    this.person = prompt('Введите номер выбранного кандидата: 1, 2, 3');

    this.check();
  };

  this.check = function(){        
    switch(this.person) {
      case '1':
        if (confirm('Ваш выбор - Алексей Аверченко, верно?')) {
          counter1++;
          break;
        } else {
          alert('Попробуем еще раз. Будьте внимательны!');
          this.choice();
        };
      break;
  
      case '2':
        if (confirm('Ваш выбор - Светлана Ушакова, верно?')) {
          counter1++;
          break;
        } else {
            alert('Попробуем еще раз. Будьте внимательны!');
            this.choice();
          };
      break;
  
      case '3':
        if (confirm('Ваш выбор - Сергей Хомич, верно?')) {
          counter1++;
          break;
        } else {
          alert('Попробуем еще раз. Будьте внимательны!');
          this.choice();
          };
      break;
  
      default: 
      if (confirm('Вы не выбрали кандидата. Желаете продолжить?')) {
        this.choice();
      } else {
        break;
        }; 
    }

    this.showTotalCounter();
  }

  this.showTotalCounter = function() {
    alert(`Предварительные итоги:
    Алексей Аверченко - ${counter1} голосов,
    Светлана Ушакова - ${counter2},
    Сергей Хомич - ${counter3}.`)
  }; 
}

let vote = new Vote();
//vote.start();
