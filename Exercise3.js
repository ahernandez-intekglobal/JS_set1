'use strict'
// Create a function that will set the color, font-size, and background color of a DOM element.
//      [a] If there are fewer arguments, it should place a default value. 
//      [b] Use the this parameter to access the values of the DOM element. (e.g. this.color or this.style.color)



function setElementStyles(color = 'black', fontSize = '16px', bgColor = 'white') {
    this.style.color = color;
    this.style.fontSize = fontSize;
    this.style.backgroundColor = bgColor;
}

let myElement = document.getElementById('myElement');

setElementStyles.call(myElement);
