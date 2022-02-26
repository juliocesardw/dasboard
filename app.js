const btnMenu=document.querySelector('.btn-menu');

btnMenu.addEventListener('click', ()=>{
    document.querySelector('.ds-left-menu').classList.toggle('menu-active');
    document.querySelector('.ds-panel').classList.toggle('tab-menu')
})



