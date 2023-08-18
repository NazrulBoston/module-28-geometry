

function calculateTriangleArea() {
   //get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);


    //get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
 
    //calculate area of triangle
    const area = 0.5 * base * height;
    // console.log(area);

    //show triangle area (akhane areaSpan ar j innerText ase oita area ar moddhe set kare disi )
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}




function calculateRectangleArea(){
// get rectangle width
const widthField = document.getElementById('rectangle-width');
const widthValueText = widthField.value;
const width = parseFloat(widthValueText);
// console.log(width)


//get rectangle length
const lengthField = document.getElementById('rectangle-length');
const lengthValueText = lengthField.value;
const length = parseFloat(lengthValueText);
// console.log(length)

//calculate area of rectangle
const area = width * length;
// console.log(area)


//show rectangle area
const rectangleAreaSpan = document.getElementById('rectangle-area');
rectangleAreaSpan.innerText = area;

}



// reuseable function (reduce the duplicate code)
function calculateParallelogramArea(){
const base = getInputValue('parallelogram-base');
console.log(base)

const height = getInputValue('parallelogram-height');
console.log(height)

const area = base * height;
setElementInnerText('parallelogram-area', area)
}


//reusable get input value field in number
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

//reusable set span, p, div, etc text( akhane parmeter ar duita man dite hobe, 1st kon id ar upor set karba
// 2nd value tao die dite hobe ar jonno duita parameter dite hobe)
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area;

}