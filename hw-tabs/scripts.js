window.addEventListener('load', function() {
    let tabBut1 = document.querySelector('.tab-but1'),
        tabBut2 = document.querySelector('.tab-but2'),
        tabBut3 = document.querySelector('.tab-but3'),
        tabItem1 = document.querySelector('.tab-item1'),
        tabItem2 = document.querySelector('.tab-item2'),
        tabItem3 = document.querySelector('.tab-item3');

        tabBut1.addEventListener('click', function() {
            this.classList.add('activ');
            tabBut2.classList.remove('activ');
            tabBut3.classList.remove('activ');
            tabItem1.classList.add('show');
            tabItem2.classList.remove('show');
            tabItem3.classList.remove('show');
        });

        tabBut2.addEventListener('click', function() {
            this.classList.add('activ');
            tabBut1.classList.remove('activ');
            tabBut3.classList.remove('activ');
            tabItem2.classList.add('show');
            tabItem1.classList.remove('show');
            tabItem3.classList.remove('show');
        });

        tabBut3.addEventListener('click', function() {
            this.classList.add('activ');
            tabBut2.classList.remove('activ');
            tabBut1.classList.remove('activ');
            tabItem3.classList.add('show');
            tabItem2.classList.remove('show');
            tabItem1.classList.remove('show');
        });
    
        
});