var text=document.querySelector('.test:hover')

window.addEventListener(
    "mousemove",
    (e) =>{
        text.style.setProperty(
            "--x", ((e.clientX / text.offsetWidth) * 100).toFixed(2) + "%");
            text.style.setProperty("--y",
            ((e.clientX / text.offsetHeight) * 100).toFixed(2) + "%");
    },
    false
);