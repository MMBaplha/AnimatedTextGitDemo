function random() {
    const r = Math.floor(Math.random()* 256);
    const g = Math.floor(Math.random()* 256);
    const b = Math.floor(Math.random()* 256);
    return `rgb(${r}, ${g}, ${b})`
}

//to cahnge each letter independently
const letter = document.querySelectorAll('.letter');
const intervalId = setInterval(function() {
    for (let letters of letter) {
        letters.style.color = random();
    }
}, 2000);