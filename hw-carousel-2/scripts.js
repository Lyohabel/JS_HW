window.addEventListener('load', function() {

    let left = document.querySelector('.slide-left'),
        right = document.querySelector('.slide-right'),
        slideImg = document.querySelector('.slide-img'),
        slides = slideImg.children;

        left.addEventListener('click', function() {
           /* slides[1].classList.add('move');*/   
            let a = slides[0];
            slideImg.classList.add('move');
            slideImg.classList.add('for-move');
            slideImg.removeChild(slides[0]);
            slideImg.appendChild(a);
            setTimeout(function() {
                slideImg.classList.remove('move');
                slideImg.classList.remove('for-move'); 
                }, 900);
                                     
        });

        right.addEventListener('click', function() {
             let a = slides[6];
             slideImg.classList.add('move2');
             slideImg.classList.add('for-move2');
             slideImg.removeChild(slides[6]);
             slideImg.insertBefore(a, slideImg.firstChild);
             setTimeout(function() {
                slideImg.classList.remove('move2');
                slideImg.classList.remove('for-move2'); 
                }, 900);                  
         });

                   
           


        
        /* setTimeout(function() {
            slideImg.classList.remove('move');
            slideImg.classList.remove('for-move'); 
            }, 100); */  
        
        
});