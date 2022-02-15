const playButton = document.querySelector("#playbutton");
const youwon = document.querySelector("#youwon");
const youlost = document.querySelector("#youlost");

function handlePlay(event) {
    event.preventDefault();

    const usernumber = document.querySelector("#guessNumber").value;
    const usernumberInt = Number(usernumber);
    const range = document.querySelector("#between");
    const range2 = range.value;
    const rangeInt = Number(range2);
    const randomNumber = Math.ceil(Math.random() * range2);

    if (usernumberInt === randomNumber) {
        youwon.innerHTML = `You chose: ${usernumberInt}. the machine chose: ${randomNumber}. <br> You won!`;
        youlost.innerText = "";
    } else if (usernumberInt !== randomNumber) {
        youlost.innerHTML = `You chose: ${usernumberInt}. the machine chose: ${randomNumber}. <br> You lost!`;
        youwon.innerHTML = "";
    } else if (usernumberInt > rangeInt) {
        alert("wrong Number")
    }
}

playButton.addEventListener("submit", handlePlay);