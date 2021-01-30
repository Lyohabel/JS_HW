/* Задание: Использую полученные знания, реализуйте экземпляр любого объекта. Объект
должен иметь, как внутренние, так и доступные для пользователя, свойства и методы.
Примеры объектов:
 Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для
расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета. &radic; */

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
