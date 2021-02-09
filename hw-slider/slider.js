const slider = function(selector, selectorPrev, selectorNext) {
    const slider = document.querySelector(selector);

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

        ml += firstWidth;
                
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

slider('.gallery', '.gallery_prev', '.gallery_next');