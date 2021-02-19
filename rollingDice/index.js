var PlayerOneGlobalScoreDiv = 0;
var PlayerTwoGlobalScoreDiv = 0;
var turn = 1;
var check = true;

function NewGame() {
    PlayerOneGlobalScoreDiv = 0;
    PlayerTwoGlobalScoreDiv = 0;
    document.getElementById("PlayerOneGlobalScore").innerHTML = PlayerOneGlobalScoreDiv;
    document.getElementById("PlayerTwoGlobalScore").innerHTML = PlayerTwoGlobalScoreDiv;
    check = true;
    document.getElementById("RollDice").type = "button";
    document.getElementById("RollDice").style = "";
    document.getElementById("RollDice").value = "start";
    document.getElementById("activeOne").innerHTML = "";
    document.getElementById("activeTwo").innerHTML = "";
    document.getElementById("Player1").style="background:white";
    document.getElementById("Player1").style="background:white";
    document.getElementById("Player1").style="font-size:140%";
    document.getElementById("Player2").style="font-size:140%";
    document.getElementById("PlayerOneGlobalScore").style="font-size:140%";
    document.getElementById("PlayerTwoGlobalScore").style="font-size:140%";
    
}




function PlayerCurrentScoreDiv(event) {
    // console.log(event.keyCode);
    
    if(turn === 3){
        turn =1 ;
    }
    if (turn === 1 && check) {
        var PlayerOneFinalCheck = PlayerOne();
        if (PlayerOneFinalCheck >= 100) {
            document.getElementById("PlayerOneGlobalScore").innerHTML = "Winner :)";
            document.getElementById("PlayerTwoGlobalScore").innerHTML ="Well tried :)";
            document.getElementById("PlayerTwoGlobalScore").style="font-size:100%";
            document.getElementById("activeTwo").innerHTML = "";
            check = false;
        }
    }
    else if (turn === 2 && check) {
        var PlayerTwoFinalCheck = PlayerTwo();
        if (PlayerTwoFinalCheck >= 100) {
            document.getElementById("PlayerTwoGlobalScore").innerHTML = "winner :)";
            document.getElementById("PlayerOneGlobalScore").innerHTML = "Well Tried :)";
            document.getElementById("PlayerOneGlobalScore").style="font-size:100%";
            document.getElementById("activeOne").innerHTML = "";
            check = false;
        }
    }
    else {
        turn = 1;
    }
    console.log(turn);

}
function clicked() {
    alert("Now start pressing down the keys");
    document.getElementById("RollDice").type = "text";
    document.getElementById("RollDice").value = "start pressing key";
    document.getElementById("RollDice").style ="background:rgba(0, 0, 0, 0.0);color:rgba(0, 0, 0, 0.0);border-style:none !important;outline:none !important;";
    document.getElementById("activeOne").innerHTML = "*";
    document.getElementById("Player1").style="background:rgba(0, 0, 0, 0.072)";
    document.getElementById("Player1").style="font-size:140%";
    document.getElementById("Player2").style="font-size:140%";
    document.getElementById("PlayerOneGlobalScore").style="font-size:140%";
    document.getElementById("PlayerTwoGlobalScore").style="font-size:140%";
    turn=0;
    PlayerOneGlobalScoreDiv = 0;
    PlayerTwoGlobalScoreDiv = 0;
}

function PlayerOne() {
    if (event.keyCode === 17 /*|| event.keyCode === 17*/ && check) {
        var x = Math.floor((Math.random() * 6) + 1);
        document.getElementById("dice").src = "pics/" + x + ".png";
        document.getElementById("PlayerOneCurrentScore").innerHTML = x;
        document.getElementById("RollDice").value = "";
        document.getElementById("RollDice").style ="background:rgba(0, 0, 0, 0.0);color:rgba(0, 0, 0, 0.0);border-style:none !important;outline:none !important;";
        PlayerOneGlobalScoreDiv = PlayerOneGlobalScoreDiv + x;
        document.getElementById("PlayerOneGlobalScore").innerHTML = PlayerOneGlobalScoreDiv;
        turn++;
        document.getElementById("Player2").style="background:rgba(0, 0, 0, 0.072)";
        document.getElementById("Player1").style="background:white";
        document.getElementById("activeTwo").innerHTML = "*";
        document.getElementById("activeOne").innerHTML = "";


    }
    else {
        document.getElementById("RollDice").value = "";
        document.getElementById("RollDice").style ="background:rgba(0, 0, 0, 0.0);color:rgba(0, 0, 0, 0.0);border-style:none !important;outline:none !important;";

    }
    x = 0;
    return PlayerOneGlobalScoreDiv;
}

function PlayerTwo() {
    if ( /*event.keyCode === 13 ||*/ event.keyCode === 13 && check) {
        var x = Math.floor((Math.random() * 6) + 1);
        document.getElementById("dice").src = "pics/" + x + ".png";
        document.getElementById("PlayerTwoCurrentScore").innerHTML = x;
        document.getElementById("RollDice").value = "";
        document.getElementById("RollDice").style ="background:rgba(0, 0, 0, 0.0);color:rgba(0, 0, 0, 0.0);border-style:none !important;outline:none !important;";
        PlayerTwoGlobalScoreDiv = PlayerTwoGlobalScoreDiv + x;
        document.getElementById("PlayerTwoGlobalScore").innerHTML = PlayerTwoGlobalScoreDiv;
        turn++;
        document.getElementById("Player1").style="background:rgba(0, 0, 0, 0.072)";
        document.getElementById("Player2").style="background:white";
        document.getElementById("activeOne").innerHTML = "*";
        document.getElementById("activeTwo").innerHTML = "";


    }
    else {
        document.getElementById("RollDice").value = "";
        document.getElementById("RollDice").style ="background:rgba(0, 0, 0, 0.0);color:rgba(0, 0, 0, 0.0);border-style:none !important;outline:none !important;";

    }
    x = 0;
    return PlayerTwoGlobalScoreDiv;
}