/* Используя полученные знания, создайте новый объект, который будет
наследовать свойства и методы объекта, созданного из предыдущего домашнего
задания по объектам (ДЗ №7). Выполните прототипное и функциональное
наследование на выбор. Модифицируйте (доработайте) любой из методов
родителя в его потомке. */

let Vote = function(pers1, pers2, pers3) {

  this.pers1 = 'pers1';
  this.pers2 = 'pers2';
  this.pers3 = 'pers3';

  let counter1 = 0,
    counter2 = 0,
    counter3 = 0;

  this.start = function() {
    if (confirm('Вы согласны принять участие в пользовательском голосовании?')) {
      this.choice();
    } else { alert('Извините за беспокойство!');
      };
  };

  this.choice = function() {
    alert(`Выберите автора лучшей публикации:
    ${pers1}, №1,
    ${pers2}, №2,
    ${pers3}, №3.`);
    
    this.person = prompt('Введите номер выбранного кандидата: 1, 2, 3');

    this.check();
  };

  this.check = function(){        
    switch(this.person) {
      case '1':
        if (confirm('Ваш выбор - ' + pers1 + ', верно?')) {
          counter1++;
          break;
        } else {
          alert('Попробуем еще раз. Будьте внимательны!');
          this.choice();
        };
      break;
  
      case '2':
        if (confirm('Ваш выбор - ' + pers2 + ', верно?')) {
          counter2++;
          break;
        } else {
            alert('Попробуем еще раз. Будьте внимательны!');
            this.choice();
          };
      break;
  
      case '3':
        if (confirm('Ваш выбор - ' + pers3 + ', верно?')) {
          counter3++;
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
    ${pers1} - ${counter1} голосов,
    ${pers2} - ${counter2},
    ${pers3} - ${counter3}.`)
  }; 
}

let VoteContest = function(pers1, pers2, pers3, contest) {
  Vote.apply(this, arguments);

  this.start = function() {
    if (confirm('Вы согласны принять участие в пользовательском голосовании финале нашего конкурса ' + contest + '?')) {
      this.choice();
    } else { alert('Извините за беспокойство!');
      };
  };
}

let voteFoto = new VoteContest('Сергей', 'Алексей', 'Елена', '"Папарацци"');

// voteFoto.start();

