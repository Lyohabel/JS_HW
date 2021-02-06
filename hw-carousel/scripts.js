window.addEventListener('load', function() {

    let left = document.querySelector('.slide-left'),
        right = document.querySelector('.slide-right'),
        slideImg = document.querySelector('.slide-img'),
        slides = slideImg.children;

        left.addEventListener('click', function() {
           /* slides[1].classList.add('move');*/   
            let a = slides[0];
            slideImg.removeChild(slides[0]);
            slideImg.appendChild(a);                  
        });

        right.addEventListener('click', function() {
             let a = slides[6];
             slideImg.removeChild(slides[6]);
             slideImg.insertBefore(a, slideImg.firstChild);                  
         });

                   
           


        
        /* setTimeout(function() {
            let a = slides[0];
            slideImg.removeChild(slides[0]);
            slideImg.appendChild(a);
            }, 1000); */  
        
        
});