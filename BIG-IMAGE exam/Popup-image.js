const popupImg = function(event) {
	event.preventDefault();

	const href = this.href;

	const popupWrap = document.createElement('div');
	popupWrap.classList.add('popup-wrap');

	const popup = document.createElement('div');
	popup.classList.add('popup');

	const close = document.createElement('span');
	close.innerHTML = '&#10006;';
	close.classList.add('close');


	popupWrap.appendChild(close);

	const img = document.createElement('img');
	img.src = href;

	popup.appendChild(img);

	popupWrap.appendChild(popup);

	document.body.appendChild(popupWrap);

	close.addEventListener('click', function() {
		popupWrap.remove();
	});
};

const aImg = document.querySelectorAll('[data-image="popup"]');

aImg.forEach(function(a) {
	a.addEventListener('click', popupImg);
});

export {popupImg, aImg};

/*
		2.3. Напишите модуль показа изображений в всплывающем popup-окне:
Создайте страницу портфолио с изображениями. К каждому изображению
добавьте ссылку на файл с большим размером, а также подпись.
Минимальное кол-во изображений на стр. должно быть не менее 8шт. По
нажатию на изображение должно открываться popup-окно с его большим
размером, ссылка на которое указано в теге <a>. Закрытие окна должноa>. Закрытие окна должно
происходить по нажатию на черный фон или “крестик”. Дизайн может быть
любым. + АДАПТИВ

		*/

	
