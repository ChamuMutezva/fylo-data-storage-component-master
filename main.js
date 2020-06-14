const slider = document.getElementById("slider");
const output = document.getElementById("value");
console.log(slider);
console.log(output);

output.innerHTML = slider.value;
slider.oninput = () => {
    output.innerHTML = slider.value;
}