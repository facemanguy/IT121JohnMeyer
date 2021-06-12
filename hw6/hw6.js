// 1. Wait till window loads elements to trigger functions
// 2. Function puts focus on form elements
// 3. User enters data, Function grabs data, validates fields
// 4. Function executes calculation
// 5. Displayed data is adjusted

function SetFocus(){
    //console.log('Focus Run');
    var milesbox = document.getElementById('milesdriven');
    milesbox.focus();
}

function ValidateFields(){
    //console.log('Validate Run')
    var valmiles;
    var valgallons;
    var milesbox = document.getElementById('milesdriven');
    var gallonsbox = document.getElementById('gallonsused');
    
    if(!milesbox.value){
        alert('Please Enter miles driven');
        //console.log("Null val");
    }else if(isNaN(milesbox.value)){
        alert('Please Enter a valid number of miles driven');
        //console.log('Error: Not a Number');
    }else if(milesbox.value != NaN){
        valmiles = milesbox.value;
        //console.log(valmiles, milesbox.value)
    }

    if(!gallonsbox.value){
        alert('Please Enter gallons used');
        //console.log("Null val");
    }else if(isNaN(gallonsbox.value)){
        alert('Please Enter a valid number of gallons used');
        //console.log('Error: Not a Number');
    }else if(gallonsbox.value != NaN){
        valgallons = gallonsbox.value;
        //console.log(valgallons, gallonsbox.value)
    }

    CalculateMPG(valmiles, valgallons);
}

function CalculateMPG(miles, gallons){
    var MPG = (miles/gallons);
    var MPGBox = document.getElementById('mpg');
    
    if(!MPG || isNaN(MPG)){
        //console.log('MPG Error');
        MPGBox.value = 'Error';
    }else{
        MPGBox.value = MPG;
    }
    
    valmiles = null;
    valgallons = null;
}


window.addEventListener('load', SetFocus, false);
var form = document.getElementById('mpgform');
form.addEventListener('submit', ValidateFields, false);