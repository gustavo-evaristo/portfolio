let loadPage = document.querySelector('.loadPage')

let loadText = document.querySelector('#loadText')

let text = 'Seja Bem Vindo'.split("")

window.addEventListener("load", () => {

    text.forEach((x, index) =>  {
        setTimeout(() => {
            loadText.innerHTML += x
            console.log(x)
        }, 150 * index)
    })

})

setTimeout(() => {
    loadPage.style.transition = '0.8s'
    loadPage.style.opacity = '0'
}, 3500)

setTimeout(() => {
    loadPage.style.display = 'none'
}, 4200)

