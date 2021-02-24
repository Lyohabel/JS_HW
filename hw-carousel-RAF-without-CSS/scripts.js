window.addEventListener('load', function() {
    
    let left = document.querySelector('.slide-left'),
        right = document.querySelector('.slide-right'),
        slideImg = document.querySelector('.slide-img'),
        slideSeen = document.querySelector('.slide-seen');

    if (!slideSeen || !slideImg || !left || !right) return;

    slideSeen.style.cssText = `
    display: flex;
	width: 450px;
	overflow: hidden;
	border: 10px solid #fff;
    `;

    slideImg.style.display = 'flex';
    let slides = slideImg.children,
        longStep = slideImg.clientWidth / slideImg.children.length;   

    slideImg.style.position = 'relative';
    slideImg.style.marginLeft = `-${longStep}px`;  
                
    const next = function() {
        right.addEventListener('click', function() {
            if (slides < 2) return;
            if (slideImg.id) {                
                slideImg.removeAttribute('id', 'pr');
                slideImg.removeAttribute('style', 'left');
                slideImg.style.cssText = `
                display: flex;
	            margin-left: -180px;
	            position: relative;
                right: 0;
                margin-left: -${longStep}px;
                `;               
            };
           
            let i = 0;
            const step = function() {
                slideImg.style.right = `+${i}px`;
                i += 5;
                
                if (i <= longStep) window.requestAnimationFrame(step);
            };

            window.requestAnimationFrame(step);

            slideImg.style.marginLeft = `0`;

            slideImg.appendChild(slides[0]);
        });
    };

    next();

    const previous = function() {
        left.addEventListener('click', function() {
            if (slides < 2) return;
            let j = 0;
            const step = function() {
                slideImg.style.left = `+${j}px`;
                j += 5;
                
                if (j <= longStep) window.requestAnimationFrame(step);
            };

            window.requestAnimationFrame(step);

            slideImg.style.marginLeft = `-${2 * longStep}px`;

            slideImg.insertBefore(slideImg.lastElementChild, slideImg.firstElementChild);

            slideImg.setAttribute('id', 'pr');       
        });
    };
    
    previous();
});