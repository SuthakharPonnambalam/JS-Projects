let maximum = parseInt(prompt("Enter a maximum number"));
let guess = Math.floor((Math.random() * maximum) + 1)
//console.log(guess)
let guessCount = 0;
let isFound = false

while (isFound === false) {
    let numberToFind = parseInt(prompt("Enter a number to guess"));
    if (numberToFind > maximum) {
        console.log("Enter a valid number")
        guessCount++;
        isFound = true;
    }
    else {
        if (numberToFind === guess) {
            console.log(`You took ${guessCount + 1} times to guess ${guess}`)
            break;
        }
        else {
            guessCount++;
        }
    }
}
