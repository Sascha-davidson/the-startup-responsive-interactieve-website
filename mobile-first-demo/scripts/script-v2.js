// let temp = document.getElementById('temp');
// let cursorClip = document.querySelector("div.front");

// let screenWidth = window.innerWidth;
// let screenHeight = window.innerHeight;

// let x = 0;
// let y = 0;

// let xPercentage = 0;
// let yPercentage = 0;

// cursorClip.style.clipPath = `circle(6% at ${x} ${y})` ;

// window.addEventListener("mousemove", (event)=>{

//     x = event.clientX;
//     y = event.clientY;

//     xPercentage = 100 / screenWidth * x;
//     yPercentage = 100 / screenHeight * y;

//     let xPercentageString = xPercentage.toString() + "%";
//     let yPercentageString = yPercentage.toString() + "%";

//     cursorClip.style.clipPath = `circle(6% at ${xPercentageString} ${yPercentageString})` ;

//     console.log(x);
// })

let pos = document.documentElement;
let posX = 0;
let posY = 0;

pos.addEventListener("mousemove", (e) => {
    posX = e.clientX;
    posY = e.clientY;
    Render();
});

document.addEventListener("scroll", (e) => {
    Render();
});

function Render() {
    let yOffset = window.pageYOffset;

    pos.style.setProperty("--x", posX + "px");
    pos.style.setProperty("--y", posY + yOffset + "px");
}
