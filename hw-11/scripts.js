/*
1. Создайте класс с именем «Contacts» для будущего приложения «Контакты», и
создайте класс с именем «User» для каждого отдельного контакта.
2. В классе «User» реализуйте сл. свойства и методы:
1. Свойство data – для хранения данных о контакте в виде простого объекта со сл. полями: id,
name, email, address, phone.
2. Метод edit(obj) – для редактирования данных контакта. В качестве параметра метод должен
принимать объект с обновленными данными и обновлять свойство data.
3. Метод get() – для получения данных о контакте. Метод должен возвращать объект с данными
из св-ва data.
4. При создании объекта на основе этого класса важно передать в конструктор данные о контакте
в виде объекта для дальнейшего сохранения в св-во data. ????????????????????
3. В классе «Contacts» реализуйте сл. св-ва и методы:
1. Свойство data – для хранения всех добавленных контактов в массиве. Каждый эл-т массива
должен представлять собой объект созданный на основе класса «User».
2. Метод add() – для создания контакта (на основе класса «User») и добавления его в массив data.
3. Метод edit(id, obj) – для редактирования информации конкретного контакты из св-ва data,
используя соответствующий метод из «User». В качестве параметра нужно передать
идентификатор контакта для последующего поиска и объект с новыми данными для
редактирования.
4. Метод remove(id) – для удаления контакта из общего массива данных по идентификатору. В
качестве параметра нужно передать идентификатор контакта.
5. Метод get() – для получения всех контактов. Метод должен возвращать объект с данными из
св-ва data.
4. Создайте еще один класс «ContactsApp» для создания интерфейса и показа
его в браузере. Класс должен наследоваться от «Contacts».
5. В классе «ContactsApp» реализуйте сл. св-ва и методы:
1. При создании объекта на основе этого класса в DOM должен добавляться главный контейнер
приложения, например, «<div class=”contacts”></div>». Доступ к контейнеру должен быть
через свойство «app» (должен хранить созданный элемент).
2. Также, в конструкторе или через любой метод в классе полностью создайте интерфейс вашего
приложения внутри главного контейнера. Предусмотрите форму с полями и кнопками для
добавления и редактирования контактов. Дизайн может быть любым, но адаптивным к
мобильным устройствам.
3. Методы onAdd(), onEdit() и onRemove() – должны срабатывать по клику по соотв. кнопкам в
интерфейсе для добавления/редактирования/удаления контакта. Важно использование
методов от «Contacts» при соотв. действиях.
4. Метод get() - для получения и обновления списка контактов в соотв. контейнере вашего
приложения. Важно сохранить возможности родительского метода.
Вы можете добавлять любые другие свойства и методы во все классы.
*/
window.addEventListener('load', function() {

    class User {
        constructor(data) { 
            this.id = data.id;
            this.name = data.name;
            this.email = data.email;
            this.address = data.address;
            this.phone = data.phone;
            
            this.data = {
                id: data.id,
                name: data.name,
                email: data.email,
                address:data.address,
                phone: data.phone            
            }
        }
        
        /*#id = this.id;
        #name = this.name;
        #email = this.email;
        #address = this.address;
        #phone = this.phone; */

       edit(obj) {this.data = {
                id: obj.id,
                name: obj.name,
                email: obj.email,
                address:obj.address,
                phone: obj.phone            
            }}

       get() {
        return 'id:' + ' ' + this.id + ', ' + 'name:' + ' ' + this.name + ', ' + 'email:' + ' ' + this.email + ', ' + 'address:' + ' ' + this.address + ', ' + 'phone:' + ' ' + this.phone;
    }

    }

    let alex = new User({id: '#a7', name: 'Alex', email: 'alex@gmail.com', address: 'дом адрес', phone: '+375-29-545-07-89'});

    console.log(alex);

    console.log(alex.data);
    
    console.log(alex.get());

    alex1 = {id: '#a8', name: 'Alex1', email: 'alex1@gmail.com', address: 'дом адрес1', phone: '+375-33-645-07-89'};

    console.log(alex.data);

    alex.edit(alex1);

    console.log(alex.data);

    console.log(alex1);

    class Contacts extends User {
        constructor(data) {
            super(data);
        }
        data = [];

        add() {
            
        }
    }

    console.dir(Contacts.data);

 });

    /*class User {
        constructor(data) {
            this.name = data.name;
            this.email = data.email;

            this.permissions = {
                view: true,
                buy: false,
                create: false,
                update: false,
                delete: false
            };
        }

        get info() {
            return this.name + ',' + this.email;
        }
    
        set info(data) {
            this.name = data.name;
            this.email = data.email;
        }

        view() {
            if (this.permissions.view) console.log(this.name + 'Просмотр страниц');
        }
        
        create() {
            if (this.permissions.create) console.log(this.name + 'Создание страниц');
        }

        update() {
            if (this.permissions.update) console.log(this.name + 'Обновление страниц');
        }

        delete() {
            if (this.permissions.delete) console.log(this.name + 'Удаление страниц');
        }

        buy() {
            if (this.permissions.buy) console.log(this.name + 'Покупка товаров');
        }

        getPermissions() {
            return this.permissions;
        }
    }

    class Buyer extends User {
        constructor(data) {
            super(data);

            this.permissions.buy = true;
        }
    }

    class Editor extends User {
        constructor(data) {
            super(data);

            this.permissions.create = true;
            this.permissions.update = true;
        }
    }

    class Admin extends User {
        constructor(data) {
            super(data);

            this.permissions.create = true;
            this.permissions.update = true;
            this.permissions.delete = true;
            this.permissions.buy = true;
        }

        create() {
            super.create();
            console.log(this.name + 'Создание страниц, доп. возможности');
        }

        update() {
            super.update();
            console.log(this.name + 'Обновление страниц, доп. возможности');
        }

        delete() {
            super.delete();
            console.log(this.name + 'Удаление страниц, доп. возможности');
        }
    }

    let alex = new User({name: 'Alex', email: 'alex@gmail.com'});
 
// obj instanceof Class - true / false - принадлежность объекта классу (в том числе классу-родителю и глоб объекту Object, а строка - также глоб объекту String)

});

Геттеры и сеттеры:
Class Xxx {
    #type = 'Adm'; - закрытое свойство

    constructor(data) { - при созд объекта сразу надо вводить данные ({name: 'Alex', ....}) 
        this.name = data.name;
        this.email = data.email;
    }

    showType() {
        console.log(this.#type);
    }

    get info() {
        return this.name + '';
    }

    set info(data) {
        this.name = data.name;
        this.email = data.email;
    }
}

let adm = new Class {};

adm.info = { name: 'Alex', email: 'al@gmail.com'}; - сеттер

console.log(adm.info); - геттер

Для функций это можно реализовать только в конкр объекте ч-з свойство defineProperty:

Object.defineProperty(obj, 'info', {
    get: function() {},
    set: function() {}
});

ПЕРЕОПРЕДЕЛЕНИЕ И ПОЛИМОРФИЗМ ПРИ НАСЛЕДОВАНИИ КЛАССОВ:

class Dog extends Animal {
    constructor(data) {
        super(data); - исп констр наследуемого класса в НАЧАЛЕ КОДА!!!

        this.speak = true;
    }

    showName() {
        super.showName(); - вызов метода родителя, можно не в начале кода
        console.log(.....); - переопределение (в итоге - расширение, полиморфизм)
    }
}

*/