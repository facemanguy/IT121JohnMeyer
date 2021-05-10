var inputTotal = 0;
var valueCount = 0;
var average;
var input;

do{
    //Prompt user for entries at least once
    input = parseInt(prompt("Average Calculator!\n- Enter a whole number\n- Enter \"999\" to calculate the average of all entries"));
    //Add values to total and count for the calculation
    inputTotal += input;
    valueCount++;
    average = ((inputTotal - 999) / (valueCount - 1));
    //Remove exit values from average calculation
}while(input != 999);

// Nan Check and return value
if (isNaN(average)){
    alert("Oops, something wasn't a valid number\nRefresh and try again");
}else{
    alert("The average of your entries is " + average + "!\nRefresh the page to start a new calculation");
}
/*
I think you could use local or session storage to store the values from multiple calculations.
You could also use an array to store everything the user entered to show the math.
*/