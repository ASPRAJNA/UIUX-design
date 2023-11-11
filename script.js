const panels = document.querySelectorAll('.panel')

panels.forEach(panel=>{
    panel.addEventListener('click', () => {
        removeActiveclass()
        panel.classList.add('active')
    })
})

function removeActiveclass() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
