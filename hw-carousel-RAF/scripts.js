window.addEventListener('load', function() {
    
    let left = document.querySelector('.slide-left'),
        right = document.querySelector('.slide-right'),
        slideImg = document.querySelector('.slide-img');
    if (!slideImg || !left || !right) return;

    let slides = slideImg.children,
        longStep = slideImg.clientWidth / slideImg.children.length;    
                
    const next = function() {
        right.addEventListener('click', function() {
            if (slides < 2) return;
            if (slideImg.id) {                
                slideImg.removeAttribute('id', 'pr');
                slideImg.removeAttribute('style', 'left');
                slideImg.style.right = '0';          
                slideImg.style.marginLeft = `-${longStep}px`;
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