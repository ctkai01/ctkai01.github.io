const $ = document.querySelector.bind(document)
const menu = $('.header__sidebar')
const menuBar = $('.menu-vertical')
const btnCloseMenu = $('.close-icon')
menu.onclick = function() {
    menuBar.animate([
        // keyframes
        {   
            transform: 'translateX(100%)' },
        {
            transform: 'translateX(0)'    
        }
      ], {
        // timing options
        duration: 500,
        easing: 'linear',
        
        // iterations: Infinity
      })
    menuBar.style.transform = `translateX(0)`     
}

btnCloseMenu.onclick = function() {
    // menuBar.classList.remove("show")
    menuBar.animate([
        // keyframes
        {    
            transform: 'translateX(0)' },

        {   
            transform: 'translateX(100%)'  
        }
      ], {
        // timing options
        duration: 500,
        easing: 'linear',
      })     
    menuBar.style.transform = `translateX(100%)`     
}