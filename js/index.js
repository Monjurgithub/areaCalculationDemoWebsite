// 1. this is use function use for input value taking and return

function getvalueInt(inputValue) {
    const b = document.getElementById(inputValue);
    const bValueStr = b.value;
    const bValueInt = parseFloat(bValueStr);
    return bValueInt

}

// 2. this function use for taking innerText and return
function getInnerText(innerTextValue)
{
    const a = document.getElementById(innerTextValue);
    const aValue = parseInt(a.innerText);
    return aValue;
}

// 3. this function use for innerText SET
function setInnerText(a)
{
    const innerTextSet = document.getElementById(a).innerText;
    return innerTextSet;

}

// 4. this function use for dynamic tbody creating
function setDataAfterCalculation(a, b, c, d) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${a}</td>
    <td>${b}</td>
    <td>${c}cm<sup>2</sup></td>
    <button class="btn btn-primary btn-sm mt-1">Convert to m<sup>2</sup></button>
    `;
    d.appendChild(tr);
}

let serial = 0;
document.getElementById("btn-triangle").addEventListener("click", function () {
    serial+=1;
    const triangleName = setInnerText("triangleName");
    const triangleB = getvalueInt("triangle-input-b");
    const triangleH = getvalueInt("triangle-input-h");
    const container = document.getElementById("table-body");
    
    if (isNaN(triangleB) || triangleB <= 0 || isNaN(triangleH) || triangleH <= 0) {
        return alert("giving the right number");
    }
    
    const triangleValue = 0.5 * triangleB * triangleH;
    setDataAfterCalculation(serial, triangleName, triangleValue, container);

})
document.getElementById("btn-rectangle").addEventListener("click", function(){
    serial+=1;
    const rectangleName = setInnerText("rectangle-Name");
    const wRectangle = getvalueInt("W-rectangle");
    console.log(wRectangle);
    const iRectangle = getvalueInt("I-rectangle");
    console.log(iRectangle);
    const container = document.getElementById("table-body");

    if (isNaN(wRectangle) || wRectangle <= 0 || isNaN(iRectangle) || iRectangle <= 0) {
        return alert("giving the right number");
    }

    const rectangleCalculation = wRectangle * iRectangle;
    setDataAfterCalculation(serial, rectangleName, rectangleCalculation, container);

})
document.getElementById("Parallelogram-btn").addEventListener("click", function()
{
    serial+=1;
    const parallelogramName = setInnerText("Parallelogram-name");
    const parallelogramB = getvalueInt("Parallelogram-b");
    const parallelogramH = getvalueInt("Parallelogram-h");
    const container = document.getElementById("table-body");

    if (isNaN(parallelogramB) || parallelogramB <= 0 || isNaN(parallelogramH) || parallelogramH <= 0) {
        return alert("giving the right number");
    }

    const parallelogramCalculation = parallelogramB * parallelogramH;
    setDataAfterCalculation(serial, parallelogramName , parallelogramCalculation, container);
})
document.getElementById("rhombus-btn").addEventListener("click", function()
{
    serial+=1;
    const rhombusName = setInnerText("rhombus-name");
    const rhombusD1Value = getvalueInt("rhombus-d1");
    const rhombusD2Value = getvalueInt("rhombus-b2");
    const container = document.getElementById("table-body");
    const rhombusCalculation = 0.5* rhombusD1Value * rhombusD2Value;
    setDataAfterCalculation(serial, rhombusName , rhombusCalculation, container);

})
document.getElementById("Pentagon-btn").addEventListener("click", function()
{
    serial+=1;
    const pentagoneName = setInnerText("Pentagon-name");
    const pentagonFirstValue = getInnerText("Pentagon-first-value");
    const pentagon2ndValue = getInnerText("Pentagon-2nd-value");
    const container = document.getElementById("table-body");
    const pentagonTotal = 0.5*pentagonFirstValue*pentagon2ndValue;
    setDataAfterCalculation(serial, pentagoneName, pentagonTotal, container);

})
document.getElementById("ellipse-btn").addEventListener("click", function()
{
    serial+=1;
    const ellipseName = setInnerText("ellipse-name");
    const ellipseFirstValue = getInnerText("ellipse-1st-value");
    const ellipse2ndValue = getInnerText("ellipse-2nd-value");
    const container = document.getElementById("table-body");
    const ellipseTotal =(3.1416*ellipseFirstValue*ellipse2ndValue).toFixed(2);
    
    setDataAfterCalculation(serial, ellipseName, ellipseTotal, container);
})
