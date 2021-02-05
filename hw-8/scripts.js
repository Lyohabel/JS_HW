/* Используя ТОЛЬКО ВОЗМОЖНОСТИ JAVASCRIPT (функции и методы
DOM и BOM) выполните верстку макета «Call_to_Action#3.fig»
(/Notes/WEB_DESIGN/Figma/Elements):
Важные условия:
1. В исходном файле index.html должна оставаться только стартовая
структура. Остальные элементы и их атрибуты, в т.ч. код CSS, должны
появляться динамически из JS.
2. Добавьте к <html> недостающий атрибут lang, а в <head></head>
недостающие и рекомендованные к использованию элементы (<meta>,
<title>).
3. CSS-код добавляйте только в тег <style></style>, используя только
селекторы классов. 

font-family: Arvo;

*/

//document.html.setAttribute('land', 'en');

document.querySelector('html').setAttribute('lang', 'en'); // - доб атрибута тзгу html

let title = document.createElement('title');
title.innerHTML = 'Hw-8 Call_to_Action#3.fig';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

document.head.appendChild(title);
document.head.appendChild(metaUtf8);

let link = document.createElement('link');
link.setAttribute('rel', 'preconnect');
link.setAttribute('href', 'https://fonts.gstatic.com');

let link2 = document.createElement('link');
link2.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
link2.setAttribute('rel', 'stylesheet');

document.head.appendChild(link);
document.head.appendChild(link2);

let site = document.createElement('div');
document.body.appendChild(site);
site.classList.add('site');

let container = document.createElement('div');
site.appendChild(container);
container.classList.add('container');

let styleCont = document.createElement('style');
styleCont.innerHTML = `
    .container {
        width: 80%;
        max-width: 1280px;
        height: 700px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Open Sans', sans-serif;
    }
`;

document.body.appendChild(styleCont);

/*container.style.width = '80%';
container.style.height = '880px';
container.style.maxWidth = '1280px';
container.style.margin = '0 auto';
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';*/

let optionWrapper = document.createElement('div');
container.appendChild(optionWrapper);
optionWrapper.classList.add('optionWrapper');

let optionChoose = document.createElement('div');
optionWrapper.appendChild(optionChoose);
optionChoose.classList.add('optionChoose');

let styleChose = document.createElement('style');
styleChose.innerHTML = `
    .optionChoose {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        padding-bottom: 50px
    }
`;

document.body.appendChild(styleChose);

let optionTitle = document.createElement('h2');
optionTitle.innerHTML = 'Choose Your Option';
optionChoose.appendChild(optionTitle);
optionTitle.classList.add('optionTitle');

let styleTitle = document.createElement('style');
styleTitle.innerHTML = `
    .optionTitle {
        font-size: 36px;
        line-height: 46px;
    }
`;

document.body.appendChild(styleTitle);

let optionText = document.createElement('span');
optionText.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
optionChoose.appendChild(optionText);
optionText.classList.add('optionText');

let styleText = document.createElement('style');
styleText.innerHTML = `
    .optionText {
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7;
        display: block; 
    }
`;

document.body.appendChild(styleText);

let optionWrapp2 = document.createElement('div');
optionWrapper.appendChild(optionWrapp2);
optionWrapp2.classList.add('optionWrapp2');

optionWrapp2.style.display = 'flex';
optionWrapp2.style.maxWidth = '800px';

let optionLeft = document.createElement('div');
optionWrapp2.appendChild(optionLeft);
optionLeft.classList.add('optionItem');

let optionRight = document.createElement('div');
optionWrapp2.appendChild(optionRight);
optionRight.classList.add('optionItem');
optionRight.classList.add('rightItem');

let styleItem = document.createElement('style');
styleItem.innerHTML = `
    .optionItem {
        padding: 75px 85px;
        text-align: center;
        border: 1px solid #e5e5e5;
        border-radius: 3px;
    }
`;

document.body.appendChild(styleItem);

let styleRightItem = document.createElement('style');
styleRightItem.innerHTML = `
    .rightItem {
        background-color: #8F75BE;
    }
`;

document.body.appendChild(styleRightItem);

let optionLeftSubTitle = document.createElement('h3');
optionLeftSubTitle.innerHTML = 'Freelancer';
optionLeft.appendChild(optionLeftSubTitle);
optionLeftSubTitle.classList.add('optionSubTitle');

let styleSub = document.createElement('style');
styleSub.innerHTML = `
    .optionSubTitle {
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #9FA3A7;
    }
`;

document.body.appendChild(styleSub);

let optionRightSubTitle = document.createElement('h3');
optionRightSubTitle.innerHTML = 'Studio';
optionRight.appendChild(optionRightSubTitle);
optionRightSubTitle.classList.add('optionSubTitle');
optionRightSubTitle.classList.add('rightSub');

let styleRightSub = document.createElement('style');
styleRightSub.innerHTML = `
    .rightSub {
        color: #FFC80A;
    }
`;

document.body.appendChild(styleRightSub);

let optionLeftTitle = document.createElement('h2');
optionLeftTitle.innerHTML = 'Initially designed to';
optionLeft.appendChild(optionLeftTitle);
optionLeftTitle.classList.add('optionTitle');

let optionRightTitle = document.createElement('h2');
optionRightTitle.innerHTML = 'Initially designed to';
optionRight.appendChild(optionRightTitle);
optionRightTitle.classList.add('optionTitle');
optionRightTitle.classList.add('right');

let styleRight = document.createElement('style');
styleRight.innerHTML = `
    .right {
        color: #fff;
    }
`;

document.body.appendChild(styleRight);

let optionLeftText = document.createElement('span');
optionLeftText.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
optionLeft.appendChild(optionLeftText);
optionLeftText.classList.add('optionText');

let optionRightText = document.createElement('span');
optionRightText.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
optionRight.appendChild(optionRightText);
optionRightText.classList.add('optionText');
optionRightText.classList.add('right');

let optionLeftBut = document.createElement('button');
optionLeftBut.innerHTML = 'Start here';
optionLeft.appendChild(optionLeftBut);
optionLeftBut.classList.add('optionBut');

let styleBut = document.createElement('style');
styleBut.innerHTML = `
    .optionBut {
        font-size: 12px;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: bold;
        border: 3px solid #FFC80A;
        border-radius: 50px;
        background-color: #fff;
        padding: 15px 30px;
        margin-top: 50px;
    }
`;

document.body.appendChild(styleBut);

let optionRightBut = document.createElement('button');
optionRightBut.innerHTML = 'Start here';
optionRight.appendChild(optionRightBut);
optionRightBut.classList.add('optionBut');
optionRightBut.classList.add('rightBut');

let styleRightBut = document.createElement('style');
styleRightBut.innerHTML = `
    .rightBut {
        background-color: #8F75BE;
        color: #fff;
    }
`;

document.body.appendChild(styleRightBut);










/* КОНСПЕКТ ВИДЕОУРОКА: 

let title = document.createElement('title');
title.innerHTML = 'New html document';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

console.log(title, metaUtf8); // проверка в консоли на ошибки

document.head.appendChild(title);
document.head.appendChild(metaUtf8);

let h1 = document.createElement('h1');
h1.innerHTML = 'Page header';

let p1 = document.createElement('p');
p1.innerHTML = 'vbnnm, ll bnhytr vvvvvvv hgf kjhyt lkuy';

document.body.appendChild(h1);
document.body.appendChild(p1);

let div1 = document.createElement('div');
h1.innerHTML = 'Text';
div1.classList.add('block'); // доб класса элементу

document.body.appendChild(div1);

let p2 = document.createElement('p');
p2.innerHTML = 'vbnnm, ll bnhytr vvvvvvv hgf kjhyt lkuy';

div1.appendChild(p2);

let ul1 = document.createElement('ul');
ul1.innerHTML = `
<li>1-item</li>
<li>2-item</li>
<li>3-item</li>
<li>4-item</li>
<li>5-item</li>`;

document.body.appendChild(ul1);

let h2 = document.createElement('h2');
h2.innerHTML = 'Header 2';

document.body.insertBefore(h2, document.querySelector('block'));

// document.querySelector('block') - поиск по селектору, querySelectorAll() - найти ВСЕ элементы

let li7 = document.createElement('li');
li7.innerHTML = 'New Itev 7';

ul1.insertBefore(li7, document.querySelector('li:nth-child(2)')); // вставить перед 2-м li

let banner = document.createElement('div');
banner.innerHTML = 'Купи слона!';
banner.classList.add('banner-adv');

document.body.insertBefore(banner, document.body.firstElementChild);

banner.style.backgroundColor = 'yellow';
banner.style.fontSize = '48px';
banner.style.fontWeight = 'bold';
banner.style.padding = '40px';
banner.style.width = '500px';

// вариант доб стилей:

let style = document.createElement('style');
style.innerHTML = `
    .banner-adv {
        position: fixed;
        top: 10%;
        left: 50%
        margin-left: = -290px;
    }
`;

document.head.appendChild(style);

// .cloneNode() -без дочерн элем  .cloneNode(true) - ВСЕ

let ul1Clone = ul1.cloneNode();

// appendChild  и insertBefore применительно к СУЩ элементам - перемещают их

// удаление remove(без арг);  removeChild();

ul1Clone.removeChild(ul1Clone.querySelector('li:nth-child(3)'));*/





