function diceRoll() {

    // Selectors
    let resultOutput = document.getElementById("result");
    let greenDie1 = document.getElementById("green-die-1");
    let greenDie2 = document.getElementById("green-die-2");
    let greenScore = document.getElementById("green-total")
    let pinkDie1 = document.getElementById("pink-die-1");
    let pinkDie2 = document.getElementById("pink-die-2");
    let pinkScore = document.getElementById("pink-total")

    // Dice Numbers
    let greenDieNum1 = Math.ceil(Math.random() * 6);
    let greenDieNum2 = Math.ceil(Math.random() * 6);
    let pinkDieNum1 = Math.ceil(Math.random() * 6);
    let pinkDieNum2 = Math.ceil(Math.random() * 6);

    // Get Totals and Winner
    let greenTotal = greenDieNum1 + greenDieNum2;
    let pinkTotal = pinkDieNum1 + pinkDieNum2;
    let winnerResult
    if (greenTotal === pinkTotal) winnerResult = "Draw";
    else if (greenTotal > pinkTotal) winnerResult = "Green Wins";
    else if (greenTotal < pinkTotal) winnerResult = "Pink Wins";

    // Set Dice
    greenDie1.src = "./images/Dice/green-die/green" + greenDieNum1 + ".png";
    greenDie1.alt = greenDieNum1;
    greenDie2.src = "./images/Dice/green-die/green" + greenDieNum2 + ".png";
    greenDie2.alt = greenDieNum2;
    pinkDie1.src = "./images/Dice/pink-die/pink" + pinkDieNum1 + ".png";
    pinkDie1.alt = pinkDieNum1;
    pinkDie2.src = "./images/Dice/pink-die/pink" + pinkDieNum2 + ".png";
    pinkDie2.alt = pinkDieNum2

    // Display results
    resultOutput.innerHTML = winnerResult;
    greenScore.innerHTML = "Greens Total: " + greenTotal;
    pinkScore.innerHTML = "Pinks Total: " + pinkTotal;
}