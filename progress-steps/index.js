const prevBtn = document.getElementById('prev'),
        nextBtn = document.getElementById('next'),
        circles = document.querySelectorAll('.circle'),
        progress = document.getElementById('progress')

let currentActiveNode = 1

prevBtn.disabled = true

nextBtn.onclick = () => {
    currentActiveNode++ 

    if(currentActiveNode > circles.length) {
        currentActiveNode = circles.length
    }

    render()
}

prevBtn.onclick = () => {
    currentActiveNode--

    if(currentActiveNode < 1) {
        currentActiveNode = 1
    }

    render()
}

function render() {
    circles.forEach((circle, index) => {
        if(index < currentActiveNode) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const activeClass = document.querySelectorAll('.active')

    progress.style.width = (activeClass.length - 1) / (circles.length - 1) * 100 + '%'


    if(currentActiveNode === 1) {
        prevBtn.disabled = true
    } else if (currentActiveNode === circles.length) {
        nextBtn.disabled = true
    } else {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}