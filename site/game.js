var timeLimit=60000;
var score=0;
var theAnswer=0;

function startGame() {
    // Set Score to Zero
    score=0;
    // Update Score Display
    document.getElementById("score").innerText=String(score);
    //disable start button
    document.getElementById("btnStart").disabled=true;
    //show sum box
    document.getElementById("sum").hidden=false;
    //Show Answer Box, clear it, and give focus
    document.getElementById("answer").hidden=false;
    document.getElementById("txtAnswer").value="";
    document.getElementById("txtAnswer").focus();
    // hide results from last time
    document.getElementById("result").hidden=false;
    // Start Timer 
    setTimeout(finishGame, timeLimit);
    // Set up a listener for the user hitting the enter key
    var input = document.getElementById("txtAnswer");
    input.addEventListener("keyup",checkEnter);
    //Begin Game loop
    gameLoop();
  }

function checkEnter(event) {
    if (event.keyCode==13 && document.getElementById("txtAnswer").value != "") {
        // Cancel the default action
        event.preventDefault();
        // Check the answer
        checkAnswer();
    }
}

function finishGame() {
    // Timer Finished. Game Over Man.
    // Hide Game components
    document.getElementById("answer").hidden=true;
    document.getElementById("sum").hidden=true;
    document.getElementById("rightanswer").hidden=true;
    document.getElementById("wronganswer").hidden=true;
    document.getElementById("txtAnswer").removeEventListener("keyup",checkEnter)
    // Show Result
    document.getElementById("result").innerText='Your Time Is Up. You scored '+String(score);
    document.getElementById("result").hidden=false;
    // enable start button so we can try again
    document.getElementById("btnStart").disabled=false;
}

function gameLoop(){
        //Pick 2 Random Numbers from 1-12
        var x=Math.floor(Math.random() * 12) + 1;
        var y=Math.floor(Math.random() * 12) + 1;
        //Record the answer
        theAnswer=x*y;
        //Show our sum
        document.getElementById("sum").innerHTML=String(x)+" x "+ String(y)+" = ";
}

function checkAnswer(){
    //Is the answer correct?
    var myAnswer= parseInt( document.getElementById("txtAnswer").value);
    if (myAnswer==theAnswer) {
        // Answer Correct
        // Increase the Score
        score=score+1;
        // Show Congratulations Message
        document.getElementById("rightanswer").hidden=false;
        document.getElementById('wronganswer').hidden=true;
    }else{
        // Answer Incorrect
        // Show Comisserations Message
        document.getElementById("rightanswer").hidden=true;
        document.getElementById("wronganswer").hidden=false;
    }
    // Clear the answer
    document.getElementById("txtAnswer").value="";
    //  Update the score
    document.getElementById("score").innerText=String(score);
    // Ask the next question
    gameLoop();
}

