window.addEventListener('load', function() {
    const slider = function(){

        const slideImg = document.querySelector('.slide-img');
        
        if ((!slideImg) || (!slideImg.children || (slideImg.children.length < 3))) return;

        let left = document.querySelector('.slide-left'),
            right = document.querySelector('.slide-right'),
            slides = slideImg.children,
            counter = 1;

        const next = function() {        
            right.addEventListener('click', function() {
                if (counter < (slides.length - 1)) {
                    counter++;
                    slideImg.classList.add('move');
                    slideImg.classList.add('for-move');
                    slideImg.appendChild(slides[0]);
                    setTimeout(function() {
                        slideImg.classList.remove('move');
                        slideImg.classList.remove('for-move'); 
                        }, 600);
                };
                //console.log(counter);                       
            });        
        };

        next();

        const previous = function() {
            left.addEventListener('click', function() {
                if (counter > 1) {
                    counter--;
                    slideImg.classList.add('move2');
                    slideImg.classList.add('for-move2');
                    slideImg.insertBefore(slideImg.lastElementChild, slideImg.firstElementChild);
                    setTimeout(function() {
                        slideImg.classList.remove('move2');
                        slideImg.classList.remove('for-move2'); 
                        }, 600);
                };
                //console.log(counter);
            });        
        };
        
        previous();
    };

    slider();
});