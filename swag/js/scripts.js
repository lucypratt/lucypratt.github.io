const hb = document.querySelector('#hButton');
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {
    pw.classList.toggle('mouseOver');
});