window.addEventListener('load', function() {

    let left = document.querySelector('.slide-left'),
        right = document.querySelector('.slide-right'),
        slideImg = document.querySelector('.slide-img'),
        slides = slideImg.children;

    const next = function() {
        right.addEventListener('click', function() {
        slideImg.classList.add('move');
        slideImg.classList.add('for-move');
        slideImg.appendChild(slides[0]);
        setTimeout(function() {
            slideImg.classList.remove('move');
            slideImg.classList.remove('for-move'); 
            }, 600);
                                     
        });
    };

    next();

    const previous = function() {
        left.addEventListener('click', function() {
        slideImg.classList.add('move2');
        slideImg.classList.add('for-move2');
        slideImg.insertBefore(slideImg.lastElementChild, slideImg.firstElementChild);
        setTimeout(function() {
            slideImg.classList.remove('move2');
            slideImg.classList.remove('for-move2'); 
            }, 600);                  
        });
    };
    
    previous();
});