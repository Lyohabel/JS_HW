window.addEventListener('load', function() {

    let left = document.querySelector('.slide-left'),
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
        });           
        
});