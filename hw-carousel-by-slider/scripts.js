window.addEventListener('load', function() {

const slider = function(selectorWrapper, selectorGallery, selectorPrev, selectorNext) {
    const slider = document.querySelector(selectorWrapper),
          gallery = document.querySelector(selectorGallery);          

    if (!slider) return;

    const list = slider.querySelectorAll('ul > li');

    if (!list || list.length == 0) return;

    const first = list[0];
    let firstWidth = first.clientWidth;

    const firstStyles = window.getComputedStyle(first);
    const firstMl = parseInt(firstStyles.marginLeft);
    const firstMr = parseInt(firstStyles.marginRight);
    firstWidth += firstMl+firstMr;

    const next = function(direction) {
        let ml = 0;
        ml = Math.abs(parseInt(first.style.marginLeft)) || 0;

        if (direction == 'prev') {
            if (ml < (gallery.scrollWidth + list[0].scrollWidth * 2)) {
                ml += firstWidth;
            } else 
                ml = 0;
                } else {
                    if (ml > 0) {                       
                        ml -= firstWidth;
                    } else {
                        ml = (gallery.scrollWidth - list[0].scrollWidth);
                    };
        };

        first.style.marginLeft = `-${ml}px`;       
    };


    const btnPrev = slider.querySelector(selectorPrev);
    const btnNext = slider.querySelector(selectorNext);

    if (btnNext && btnPrev) {
        btnPrev.addEventListener('click', function() {
            next('prev');
        });

        btnNext.addEventListener('click', function() {
            next();
        });
    }
};

slider('.slide-wrapper', '.slide-img', '.slide-left', '.slide-right');



    /*let left = document.querySelector('.slide-left'),
        right = document.querySelector('.slide-right'),
        slideImg = document.querySelector('.slide-img'),
        slides = slideImg.children;

        left.addEventListener('click', function() {
            if (slideImg.classList.value == 'slide-img') {
                slideImg.classList.add('move');
            } else if 
            (slideImg.classList.value == 'slide-img move') {
                slideImg.classList.remove('move');
                slideImg.classList.add('move2'); 
                 } else if
                 (slideImg.classList.value == 'slide-img move2') {
                    slideImg.classList.remove('move2');
                    slideImg.classList.add('move3'); 
                     } else if
                     (slideImg.classList.value == 'slide-img move3') {
                        slideImg.classList.remove('move3');
                        slideImg.classList.add('move4'); 
                         } else if
                         (slideImg.classList.value == 'slide-img move4') {
                            slideImg.classList.remove('move4');
                            slideImg.classList.add('move5'); 
                             } else if
                             (slideImg.classList.value == 'slide-img move5') {
                                slideImg.classList.remove('move5');
                                slideImg.classList.add('move6'); 
                                 } else if
                                 (slideImg.classList.value == 'slide-img move6') {
                                    slideImg.classList.remove('move6');
                                    }          
        });

        right.addEventListener('click', function() {
            if (slideImg.classList.value == 'slide-img move6') {
                slideImg.classList.remove('move6');
                slideImg.classList.add('move5');
            } else if 
            (slideImg.classList.value == 'slide-img move5') {
                slideImg.classList.remove('move5');
                slideImg.classList.add('move4'); 
                 } else if
                 (slideImg.classList.value == 'slide-img move4') {
                    slideImg.classList.remove('move4');
                    slideImg.classList.add('move3'); 
                     } else if
                     (slideImg.classList.value == 'slide-img move3') {
                        slideImg.classList.remove('move3');
                        slideImg.classList.add('move2'); 
                         } else if
                         (slideImg.classList.value == 'slide-img move2') {
                            slideImg.classList.remove('move2');
                            slideImg.classList.add('move'); 
                             } else if
                             (slideImg.classList.value == 'slide-img move') {
                                slideImg.classList.remove('move');
                                } else if
                                (slideImg.classList.value == 'slide-img') {
                                    slideImg.classList.add('move6');
                                }
        });  */         
        
});