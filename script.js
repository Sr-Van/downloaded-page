const text = document.querySelector(".sec-text")

const textLoad = ()=>{
    setTimeout(() => {
        text.textContent = 'Working'
    }, 0);
    setTimeout(() => {
        text.textContent = 'Gaming'
    }, 4000);
    setTimeout(() => {
        text.textContent = 'Entertainment'
    }, 8000);
}

textLoad()
setInterval(textLoad, 12000);