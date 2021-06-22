window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header'),
    menu = header.querySelector('.header-nav_none'),
    menuItem = header.querySelectorAll('.nav-link'),
    hamburger = document.querySelector('.header__hamburger'),
    btnModal = document.querySelectorAll('.btn-modal'),
    overlay = document.querySelector('.overlay'),
    modal = document.querySelector('.modal'),
    close = modal.querySelector('.modal__close');
    

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header-nav_none_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header-nav_none_active');
        });
    });
    btnModal.forEach(item =>{
        item.addEventListener('click', () => {
            overlay.classList.add('active');
            modal.classList.add('active');
        });
    });

    close.addEventListener('click', () => {
        overlay.classList.remove('active');
        modal.classList.remove('active');
    });
});
