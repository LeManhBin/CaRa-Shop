const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const nav = document.querySelector(".navbar");

if(openBtn) {
    openBtn.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if(closeBtn) {
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault()
        nav.classList.remove('active');
    })
}