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


var pos = document.documentElement;
pos.addEventListener("mousemove", e =>{
    pos.style.setProperty('--x', e.clientX + "px")
    pos.style.setProperty('--y', e.clientY + "px")
})





