let homeIcons = document.querySelectorAll('.homeContainer .socialContainer i')

for(let i = 0; i < homeIcons.length; i++)
    homeIcons[i].addEventListener('mouseover', () => {
        homeIcons[i].style.transition = '0.3s'
        homeIcons[i].style.color = '#1fac73'
    })


for(let i = 0; i < homeIcons.length; i++) 
    homeIcons[i].addEventListener('mouseleave', () => {
        homeIcons[i].style.transition = '0.3s'
        homeIcons[i].style.color = '#ffffff'
    })