let menuItems = document.querySelectorAll('ul li a')

for(let i = 0; i < menuItems.length; i++)
    menuItems[i].addEventListener('mouseover', () => {
        menuItems[i].style.transition = '0.3s'
        menuItems[i].style.color = '#1fac73'
    })


for(let i = 0; i < menuItems.length; i++) 
    menuItems[i].addEventListener('mouseleave', () => {
        menuItems[i].style.transition = '0.3s'
        menuItems[i].style.color = '#ffffff'
    })