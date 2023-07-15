// Function to change the text in the header
function changeText() {
    // Define potential texts
    let potentialTexts = ['Number_01', 'Number_02', 'Number_03', 'Number_04', 'Number_05'];

    // Generate a random number within the range of the potentialTexts array
    let randomNumber = getRandomNumber(0, potentialTexts.length - 1);

    // Select a random text from the potentialTexts array
    let textToChangeTo = potentialTexts[randomNumber];

    // Change the text in the header
    document.getElementById('header').innerHTML = textToChangeTo;
}

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
