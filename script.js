//MENU
const hamburguer = document.querySelector('.menu-hamburguer');
const menuLista = document.querySelector('.menu--lista');


hamburguer.addEventListener('click', () => {
    
    menuLista.classList.toggle('ativo');
    hamburguer.classList.toggle('ativo');
});