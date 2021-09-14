const imgs = document.querySelectorAll('.img-card')

imgs.forEach(img => {
    img.addEventListener('click', () => {
        removeShowImage()
        img.classList.add('show-img')
    })
})

function removeShowImage() {
    imgs.forEach(img => {
        img.classList.remove('show-img')
    })
}