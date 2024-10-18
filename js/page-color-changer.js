// Declare constants for input slider elements and the page background
const pageBg = document.querySelector("html");
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

// Initialize RGB values
let rgb = [0, 0, 0];

// Function to handle changes to the RGB values
function changeRgb(channel, value) {
    switch (channel) {
        case "red":
            rgb[0] = parseInt(value); // Update red
            break;
        case "green":
            rgb[1] = parseInt(value); // Update green
            break;
        case "blue":
            rgb[2] = parseInt(value); // Update blue
            break;
    }
    updateBackgroundColor();
}

// Function to update the background color
function updateBackgroundColor() {
    const newColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    pageBg.style.backgroundColor = newColor;
}

// Event listeners for sliders
redSlider.addEventListener("input", function() {
    changeRgb("red", this.value);
});

greenSlider.addEventListener("input", function() {
    changeRgb("green", this.value);
});

blueSlider.addEventListener("input", function() {
    changeRgb("blue", this.value);
});
