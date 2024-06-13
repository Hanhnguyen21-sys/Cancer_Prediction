//Temperature Conversion

const textbox = document.getElementById("textbox");
const toF = document.getElementById("to_F");
const toC = document.getElementById("to_C");
const result = document.getElementById("result");
let temp;

function convert()
{
    if(toF.checked)
    {
        temp = (textbox.value *1.8)+32;
        result.textContent= temp + "°F";
    } 
    else if (toC.checked)
    {
        temp = ((textbox.value-32)*5)/9;
        result.textContent= temp + "°C";
    }
    else
    {
        result.textContent='Please select an option';
    }
}