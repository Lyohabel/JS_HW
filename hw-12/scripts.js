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

        const getCookie = function getCookie(name) {
            let matches = document.cookie.match(new RegExp(
              "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
          };

          if (!getCookie('storageExpiration')) window.localStorage.clear();

        if (this.data.length == 0 && getCookie('storageExpiration') && window.localStorage.getItem('allUsers')) {             
            let inf = window.localStorage.getItem('allUsers');
            if (inf != '') this.data = JSON.parse(inf);
            this.updateList();
        };

        addUser.addEventListener('click', function() {
            self.onAdd();
            self.updateList();
            //self.storage(self.data);            
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
        });

        window.localStorage.clear();
        window.localStorage.setItem('allUsers', JSON.stringify(this.data));
        document.cookie = 'storageExpiration=true; max-age=30'; // 10 дней = 10*24**3600 = 864000 сек     
        
    };

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

    };

    onRemove(id) {
        this.remove(id);      

        this.updateList();        
    }    
    /*
    set storage(data) {
        window.localStorage.clear();
        window.localStorage.setItem('allUsers', JSON.stringify(data));
    } 
    НЕ РАБОТАЕТ!!!! */

    get storage() {
        let inf = window.localStorage.getItem('allUsers');
        console.log(inf);
        return inf;
    }
}

window.addEventListener('load', function() {

    let app1 = new ContactsApp();

    console.log(app1.data);

    //window.localStorage.setItem('allUsers', app1);

    app1.storage;

    //app1.storage(app1.data);

    console.log(document.cookie);

});

/*
 В классе «ContactsApp» реализуйте сл. св-ва и методы:
1. Геттер и сеттер «storage()» для хранения (добавления и обновления) и получения данных из
localStorage браузера.
2. При каждом обновлении localStorage должен создаваться COOKIE параметр
«storageExpiration» на уровне всего приложения и сроком на 10 дней.
3. По истечению срока действия «storageExpiration» все данных из localStorage и COOKIES
должны быть удалены.
*/

