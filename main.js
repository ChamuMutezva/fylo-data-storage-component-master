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