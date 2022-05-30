const article__dropdown__title = document.querySelectorAll('.dropdown__title')
const article__dropdown = document.querySelectorAll('.dropdown')


article__dropdown__title.forEach( i => {
    i.addEventListener('click', dropdown => {
    i.parentNode.classList.add('dropdown--animation')
    console.log(i.parentNode)

    setTimeout(() =>{
        i.parentNode.classList.remove('dropdown--animation')
    }, 500);
    })
})