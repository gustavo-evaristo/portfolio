let homeContactButton = document.querySelectorAll('.homeButton')

for(let i = 0; i < homeContactButton.length; i++)
    homeContactButton[i].addEventListener('mouseover', () => {
        homeContactButton[i].style.transition = '0.3s'
        homeContactButton[i].style.background = '#178d5e'
    })


for(let i = 0; i < homeContactButton.length; i++) 
    homeContactButton[i].addEventListener('mouseleave', () => {
        homeContactButton[i].style.transition = '0.3s'
        homeContactButton[i].style.background = '#1fac73'
    })


let homeCvButton = document.querySelectorAll('.cv')

for(let i = 0; i < homeCvButton.length; i++)
    homeCvButton[i].addEventListener('mouseover', () => {
        homeCvButton[i].style.transition = '0.3s'
        homeCvButton[i].style.background = '#178d5e'
    })


for(let i = 0; i < homeCvButton.length; i++) 
    homeCvButton[i].addEventListener('mouseleave', () => {
        homeCvButton[i].style.transition = '0.3s'
        homeCvButton[i].style.background = '#121212'
    })
