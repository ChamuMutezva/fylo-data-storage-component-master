const slider = document.getElementById("slider");
const gbLeft = document.getElementById("gbLeft");
const gbUsed = document.getElementById("gbUsed");
console.log(slider);
console.log(gbLeft);

gbUsed.innerHTML = slider.value;
gbLeft.innerHTML = 1000 - slider.value;
slider.oninput = () => {
    gbLeft.innerHTML = 1000 - slider.value;
    gbUsed.innerHTML = slider.value;
}

slider.addEventListener("mousemove", ()=> {
    let x = slider.value;
    let color = "linear-gradient(90deg , hsl(6, 100%, 80%)" + x + "% , hsl(335, 100%, 65%)" + x + "60%)"
    console.log(x);
    slider.style.background = color;
})