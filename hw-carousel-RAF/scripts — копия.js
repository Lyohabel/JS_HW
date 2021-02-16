window.addEventListener('load', function() {

    let left = document.querySelector('.slide-left'),
        right = document.querySelector('.slide-right'),
        slideImg = document.querySelector('.slide-img'),
        slides = slideImg.children;
        longStep = slideImg.clientWidth / slideImg.children.length;

        console.dir(longStep);

    const next = function() {
        right.addEventListener('click', function() {
            let i = 0;
            const step = function() {
                slideImg.style.right = `+${i}px`;
                i += 5;
                
                if (i < longStep) window.requestAnimationFrame(step);
            };

            window.requestAnimationFrame(step);

            slideImg.appendChild(slides[0]);
        });
    };

    next();

    const previous = function() {
        left.addEventListener('click', function() {
            let j = 0;
            const step = function() {
                slideImg.style.left = `+${j}px`;
                j += 5;
                
                if (j < longStep) window.requestAnimationFrame(step);
            };

            window.requestAnimationFrame(step);

            slideImg.insertBefore(slideImg.lastElementChild, slideImg.firstElementChild);
        });
    };
    
    previous();
});