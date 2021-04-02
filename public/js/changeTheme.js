let changeIcon = document.querySelector('#changeTheme')

let html = document.querySelector('html').style

let headerSpan = document.querySelector('header h2 span').style

let textContainer = document.querySelector('.textContainer h1').style

changeIcon.addEventListener('click', () => {

   let currentClass = changeIcon.classList[1]

    if (currentClass == 'fa-sun'){

        changeIcon.classList.remove('fa-sun')
        changeIcon.classList.add('fa-moon')

        html.transition = '0.4s'
        html.background = '#f1f1f1'

        headerSpan.color = '#000000'

        for(let i = 0; i < menuItems.length; i++) {
            menuItems[i].style.color = '#000000'
            menuItems[i].addEventListener('mouseleave', () => {
                menuItems[i].style.transition = '0.3s'
                menuItems[i].style.color = '#000000'
            })
    
        }

        for(let i = 0; i < homeIcons.length; i++){

            homeIcons[i].style.color = '#000000'
            homeIcons[i].addEventListener('mouseleave', () => {
                homeIcons[i].style.transition = '0.3s'
                homeIcons[i].style.color = '#000000'
            })
        }

        textContainer.color = '#000000'

    } else {

        changeIcon.classList.remove('fa-moon')
        changeIcon.classList.add('fa-sun')

        html.transition = '0.4s'
        html.background = '#000000'

        headerSpan.color = '#ffffff'

        for(let i = 0; i < menuItems.length; i++) {
            menuItems[i].style.color = '#ffffff'
            menuItems[i].addEventListener('mouseleave', () => {
                menuItems[i].style.transition = '0.3s'
                menuItems[i].style.color = '#ffffff'
            })
    
        }

        for(let i = 0; i < homeIcons.length; i++){

            homeIcons[i].style.color = '#ffffff'
            homeIcons[i].addEventListener('mouseleave', () => {
                homeIcons[i].style.transition = '0.3s'
                homeIcons[i].style.color = '#ffffff'
            })
        }

        textContainer.color = '#ffffff'



    }   

})