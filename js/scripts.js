
const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const menuItensLink = document.querySelectorAll('.menu-item-link');

const leftAside = document.querySelector('.menu-lateral-esquerdo');
const containerMain = document.querySelector('.contentor-principal');

openMenu.addEventListener('click', ()=>{
    menuItensLink.forEach((menuItemLink)=>{
        menuItemLink.classList.add('menu-item-link-collapse');
    });
    openMenu.classList.add('collapse');
    closeMenu.classList.remove('collapse');
});


closeMenu.addEventListener('click', ()=>{
    menuItensLink.forEach((menuItemLink)=>{
        menuItemLink.classList.remove('menu-item-link-collapse');
    });
    openMenu.classList.remove('collapse');
    closeMenu.classList.add('collapse');
});
