const intro = document.getElementById('intro');
const book = document.getElementById('a');
const body = document.getElementById('body');


setTimeout(() => {
    intro.style.opacity = "0";
}, 3000);
setTimeout(() => {
    intro.style.display = "none";
}, 3500);

body.addEventListener('scroll', ()=>{
    let s = book.scrollHeight
    console.log(s);
})
