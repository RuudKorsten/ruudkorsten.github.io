Creating a complete game with only JavaScript is challenging without any HTML or CSS elements, as JavaScript alone cannot render any graphics or player interfaces.

I could however, demonstrate the logic for a simple text-based number guessing game in a 'dark mode' theme with included instructions. However, playing the game would require running the JavaScript on a page in a browser with the JavaScript console open. Here it is:

```javascript
// Start of game logic
console.log("%cWelcome to Dark Mode Guessing Game!", "color: white; background-color: black;");
console.log("%cYou are to guess a number between 1 and 10. You have three attempts. Best of luck!", "color: white; background-color: black;");

let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function guessNumber(guess) {
    attempts++;
    if(attempts <= 3) {
        if (guess === randomNumber) {
            console.log(`%cYou've guessed right! The number was ${randomNumber}!`, "color: white; background-color: black;");
        } else {
            console.log("%cThat's incorrect. Try again!", "color: white; background-color: black;");
            if(attempts === 3) {
                console.log(`%cGame over! The number was ${randomNumber}`, "color: white; background-color: black;");
            }
        }
    } else {
        console.log("%cYou've exceeded max attempts! Game over!", "color: white; background-color: black;");
    }
}
// End of game logic
```

Please replace "guess" in "guessNumber(guess)" with your guessed number and run the function three times in the console. Please note that the colors only work in browser development consoles that support %c CSS styling. This emulates a 'dark mode' theme.

Before starting, do ensure the entire code is pasted in the JavaScript console and enter to initialize the game. Then, guess a number between 1 and 10 to play the game by calling guessNumber() function in console with your guessed number as an argument.
For example, to make a guess with the number 5, you would type guessNumber(5) in the console, then hit enter. As you play, the console will keep you updated on the game status.

Bear in mind that a fully immersive 'dark mode' game in JavaScript would usually incorporate a visual interface that would require some form of HTML/CSS. Also understand that this is a very basic example of a game and a true JavaScript-based game might involve more complex logic and potentially libraries such as React or Phaser for more visual-based games.

This code represents the core logic of a guessing game and the game flow but does not cover aspects of user interface or interactive graphics.