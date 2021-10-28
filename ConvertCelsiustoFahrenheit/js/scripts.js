window.onload = function () {
    console.log("Page has loaded. And, we are beginning");

    var celsius = 30.00;

    var response1 = convertToF(celsius);

    console.log("The temperature in Fahrenheit is: " + response1 + " celsius is: " + celsius);

    testFahrenheit(response1, celsius);

    console.log("And...we are done on the main page");
}

//The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
function convertToF(celsius) {
    let fahrenheit=0.0;

    fahrenheit = celsius * 9.0 / 5.0 + 32.0;

    return fahrenheit;
}

convertToF(30);

//https://www.metric-conversions.org/temperature/celsius-to-fahrenheit.htm
//30 degrees equals 86.8 degrees Fahrenheit
//I cannot tell why I keep getting 86.8 as the suggested correct answer. 
//I even tested the formula with a hand calculator and it still gives me 86.0
const testFahrenheit = (response1, celsius) => {
    console.log("testFahrenheit: And, we are beginning");
    console.log("The temperature in Fahrenheit is: " + response1 + " celsius is: " + celsius);
    var correctValue = 86.0
    if (response1 == correctValue)
        console.log("Test Passed!")
    else
        console.log("Test Failed!")
    console.log("testFahrenheit: And...we are done");
}