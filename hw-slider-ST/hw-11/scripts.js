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

class User {
    constructor(data) { 
        this.data = {
            id: data.id,
            name: data.name,
            email: data.email,
            address:data.address,
            phone: data.phone            
        }
    }        
    
    edit(obj) {this.data = {
            id: obj.id,
            name: obj.name,
            email: obj.email,
            address:obj.address,
            phone: obj.phone            
        }
    }

    get() {
        return this.data;
    }
}

class Contacts {
    constructor() {
        this.data = [];
    }
    
    add(data) {
        let newUser = new User(data);
        this.data.push(newUser);          
    }    

    edit(id, obj) {
        let ind;
        this.data.forEach(function(user, i) {
            
            if (+user.data.id == +id) ind = i; 
        });
      
        if (obj.name) this.data[ind].data.name = obj.name;
        if (obj.address) this.data[ind].data.address = obj.address;
        if (obj.phone) this.data[ind].data.phone = obj.phone;
        if (obj.email) this.data[ind].data.email = obj.email;
    }
    
    
    
    remove(id) {
        let ind;
        this.data.forEach(function(user, i) {
            if (+user.data.id == +id) ind = i; 
        });
        this.data.splice(ind, 1);
    }
    
    get() {
        return this.data
    }
}

class ContactsApp extends Contacts {
    constructor() {
        super();
        this.app = document.createElement('div');
        this.app.classList.add('contacts');
        document.body.appendChild(this.app);

        this.ui();        
    }

    ui() {
        let form = document.createElement('div');
        form.classList.add('form');
        this.app.appendChild(form);
        let id = document.createElement('input');
        id.setAttribute('type', 'text');
        id.setAttribute('name', 'user-id');
        id.setAttribute('placeholder', 'id');
        form.appendChild(id);
        let name = document.createElement('input');
        name.setAttribute('type', 'text');
        name.setAttribute('name', 'user-name');
        name.setAttribute('placeholder', 'name');
        form.appendChild(name);
        let email = document.createElement('input');
        email.setAttribute('type', 'text');
        email.setAttribute('name', 'user-email');
        email.setAttribute('placeholder', 'email');
        form.appendChild(email);
        let address = document.createElement('input');
        address.setAttribute('type', 'text');
        address.setAttribute('name', 'user-address');
        address.setAttribute('placeholder', 'address');
        form.appendChild(address);
        let phone = document.createElement('input');
        phone.setAttribute('type', 'text');
        phone.setAttribute('name', 'user-phone');
        phone.setAttribute('placeholder', 'phone');
        form.appendChild(phone);

        let addUser = document.createElement('button');
        addUser.classList.add('user-add');
        addUser.innerHTML = 'ADD';
        form.appendChild(addUser);        

        let list = document.createElement('ul');
        list.classList.add('contacts-list');
        this.app.appendChild(list);

        let self = this;

        addUser.addEventListener('click', function() {
            self.onAdd();
            self.updateList();
        });

        
        
    }
    
    onAdd() {
        let userId = this.app.querySelector('input[name="user-id"]'),
            userName = this.app.querySelector('input[name="user-name"]'),
            userEmail = this.app.querySelector('input[name="user-email"]'),
            userAddress = this.app.querySelector('input[name="user-address"]'),
            userPhone = this.app.querySelector('input[name="user-phone"]');
            
        let userData = {};

        if (userId && userId.value.length >0) userData.id = userId.value;
        if (userName && userName.value.length >0) userData.name = userName.value;
        if (userEmail && userEmail.value.length >0) userData.email = userEmail.value;
        if (userId && userId.value.length >0) userData.address = userAddress.value;
        if (userPhone && userPhone.value.length >0) userData.phone = userPhone.value;        

        this.add(userData);

        userId.value = '';
        userName.value = '';
        userEmail.value = '';
        userAddress.value = '';
        userPhone.value = '';
    }

    updateList() {
        let list = this.app.querySelector('.contacts-list');
        list.innerHTML = '';

        let self = this;

        this.data.forEach (function(user) {
            let li = document.createElement('li');
            li.innerHTML = `
            id: ${user.data.id}<br/>
            name: ${user.data.name}<br/>
            email: ${user.data.email}<br/>
            address: ${user.data.address}<br/>
            phone: ${user.data.phone}<br/>
            `;
            list.appendChild(li);

            let editUser = document.createElement('button');
            editUser.classList.add('user-edit');
            editUser.innerHTML = 'EDIT';
            editUser.setAttribute('data-id', user.data.id);
            li.appendChild(editUser);

            let removeUser = document.createElement('button');
            removeUser.classList.add('user-revove');
            removeUser.innerHTML = 'REMOVE';
            removeUser.setAttribute('data-id', user.data.id);
            li.appendChild(removeUser);            

            editUser.addEventListener('click', function(event) {
                self.onEdit(event.target.dataset.id);
            });

            removeUser.addEventListener('click', function(event) {
                self.onRemove(event.target.dataset.id);
            });
        }
    )};

    onEdit(id) {
        let ind = this.data.findIndex(item => item.data.id == id);        

        let indUser = this.data[ind],
            indData = this.data[ind].data,
            list = document.querySelector('ul'),
            listItem = list.children[ind];

        let form = document.createElement('div');
        form.classList.add('form');
        listItem.appendChild(form);
        let id1 = document.createElement('input');
        id1.setAttribute('type', 'text');
        id1.setAttribute('name', 'user-id');
        id1.setAttribute('placeholder', 'id');
        form.appendChild(id1);
        let name = document.createElement('input');
        name.setAttribute('type', 'text');
        name.setAttribute('name', 'user-name');
        name.setAttribute('placeholder', 'name');
        form.appendChild(name);
        let email = document.createElement('input');
        email.setAttribute('type', 'text');
        email.setAttribute('name', 'user-email');
        email.setAttribute('placeholder', 'email');
        form.appendChild(email);
        let address = document.createElement('input');
        address.setAttribute('type', 'text');
        address.setAttribute('name', 'user-address');
        address.setAttribute('placeholder', 'address');
        form.appendChild(address);
        let phone = document.createElement('input');
        phone.setAttribute('type', 'text');
        phone.setAttribute('name', 'user-phone');
        phone.setAttribute('placeholder', 'phone');
        form.appendChild(phone);
    
        let addAfterEdit = document.createElement('button');
        addAfterEdit.classList.add('user-add');
        addAfterEdit.innerHTML = 'Add after edit';
        form.appendChild(addAfterEdit);
        
        id1.value = indData.id;
        name.value = indData.name;
        email.value = indData.email;
        address.value = indData.address;
        phone.value = indData.phone;

        let self = this;        

        addAfterEdit.addEventListener('click', function() {

            let obj = {
                id: id1.value,
                name: name.value,
                email: email.value,
                address: address.value,
                phone: phone.value
            }
            
            self.edit((ind + 1), obj);

            self.updateList();            
        });

        /*        
        
        let userId = this.app.querySelector('input[name="user-id"]'),
            userName = this.app.querySelector('input[name="user-name"]'),
            userEmail = this.app.querySelector('input[name="user-email"]'),
            userAddress = this.app.querySelector('input[name="user-address"]'),
            userPhone = this.app.querySelector('input[name="user-phone"]');            

        userId.value = indData.id;
        userName.value = indData.name;
        userEmail.value = indData.email;
        userAddress.value =indData.address;
        userPhone.value = indData.phone;

        this.remove(id); 

        this.data[ind].data.id = userId.value;
        this.data[ind].data.name = userName.value;
        this.data[ind].data.email = userEmail.value;
        this.data[ind].data.address = userAddress.value;
        this.data[ind].data.phone = userPhone.value;
        
        this.updateList();*/

    };

    onRemove(id) {
        this.remove(id);      

        this.updateList();        
    }
}

window.addEventListener('load', function() {

    let app1 = new ContactsApp();

});

    /*
    
    let editUser = document.createElement('button');
        editUser.classList.add('user-edit');
        editUser.innerHTML = 'EDIT';
        form.appendChild(editUser);

        let removeUser = document.createElement('button');
        removeUser.classList.add('user-revove');
        removeUser.innerHTML = 'REMOVE';
        form.appendChild(removeUser); 
    class User {
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