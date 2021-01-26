/* Задание: Использую полученные знания, реализуйте экземпляр любого объекта. Объект
должен иметь, как внутренние, так и доступные для пользователя, свойства и методы.
Примеры объектов:
 Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для
расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета. &radic; */

/*let Calc = function() {
    this.get = function(){
        this.a = +promt('Введите число а');
        this.oper = promt('Введите операцию: +, -, *, /, **, √');
        if (this.oper != '√') {
        this.b = +promt('Введите число b');
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
        if(this.oper = '√') {
            alert(this.oper + ' ' + this.a + ' = ' + this.result);
        } else {        
            alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
          }; 
    
    };
  
};
  
let calc = new Calc();
console.log(calc);

calc.get(); */

let Calc = function() {
    this.get = function(){
        this.a = +promt('Введите число а');
        this.b = +promt('Введите число b');
        this.oper = promt('Введите операцию: +, -, *, /');
  
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
  
      default: this.result = 0;
    };
  
    this.show();
    };
  
    this.show = function() {
    alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
    };
  
  };
  
  let calc = new Calc();
  calc.get();


/*  Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
счетчик горения лампочки.
 Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды),
вкл./выкл., расчет времени закипания воды.
 Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
(ввод информации о скорости движения), расчет пройденных километров.
 Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.
почта), проверка введенной информации, например: проверить возраст – должен быть
целым неотрицательным числом больше 18, вывод информации о конкретном
контакте, вывод всех контактов.
Можно выдумать любой другой объект. Кол-во методов и свойств может быть любым, но не
менее трех. */