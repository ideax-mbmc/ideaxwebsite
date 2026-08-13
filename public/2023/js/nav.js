const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
    links.classList.toggle("mobile");
    hamburger.classList.toggle("hamclick");
})