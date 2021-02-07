window.addEventListener('load', function() {

    let left = document.querySelector('.slide-left'),
        right = document.querySelector('.slide-right'),
        slideImg = document.querySelector('.slide-img'),
        slides = slideImg.children;

        left.addEventListener('click', function() {
            slideImg.classList.add('move');
            slideImg.classList.add('for-move');
            slideImg.appendChild(slides[0]);
            setTimeout(function() {
                slideImg.classList.remove('move');
                slideImg.classList.remove('for-move'); 
                }, 500);
                                     
        });

        right.addEventListener('click', function() {
             slideImg.classList.add('move2');
             slideImg.classList.add('for-move2');
             slideImg.insertBefore(slides[6], slideImg.firstChild);
             setTimeout(function() {
                slideImg.classList.remove('move2');
                slideImg.classList.remove('for-move2'); 
                }, 500);                  
         });                 
});