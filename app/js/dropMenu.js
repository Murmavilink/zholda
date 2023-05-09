const dropMenu = () => {
    const nav = document.querySelector('.nav');

    const toggleClass = () => nav.classList.toggle('nav--active');


    document.addEventListener('click', (e) => {
        if(e.target.closest('.nav') === nav || !e.target.closest('.nav') && nav.classList.contains('nav--active')) toggleClass();
    });


    window.addEventListener('scroll', () => {
        if(nav.classList.contains('nav--active')) toggleClass();
    });
};


dropMenu();