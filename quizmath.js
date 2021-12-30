var playername1=localStorage.getItem("player1");
var playername2=localStorage.getItem("player2");

var scores1 = 0;
var scores2 = 0;

document.getElementById("user1").innerHTML=playername1+":";
document.getElementById("user2").innerHTML=playername2+":";
document.getElementById("score1").innerHTML=" "+scores1;
document.getElementById("score2").innerHTML=" "+scores2;
document.getElementById("q1").innerHTML=playername1;
document.getElementById("a1").innerHTML=playername2;

function send(){
    num1= document.getElementById("num1").value;
    num2= document.getElementById("num2").value;
    answer1=parseInt(num1)*parseInt(num2);
    question_head="<h4>"+num1+" X "+num2+"</h4>";
    answer_box="<br>Answer:<br><input type='text' id='answerboxcheck'>";
    checker="<br><br><button id='check123' class='btn btn-infox' onclick='checkanswer()'>Check</button>"
    row = question_head+answer_box+checker;
    document.getElementById("mathproblem").innerHTML = row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}
var question_turn="player1";
var answer_turn="player2"
function checkanswer(){
    console.log("checking");
    answer123 = document.getElementById("answerboxcheck").value;
    if(answer123==answer1){
        if(answer_turn=="player2"){
            scores2=scores2+1;
            document.getElementById("score2").innerHTML=scores2;
        }
        else{
            scores1++;
            document.getElementById("score1").innerHTML=scores1;
        }
    }
    if(question_turn=="player1"){
        document.getElementById("q1").innerHTML=playername2;
        question_turn="player2";
    }
    else{
        document.getElementById("q1").innerHTML=playername1;
        question_turn="player1";
    }
    if(answer_turn=="player1"){
        document.getElementById("a1").innerHTML=playername2;
        answer_turn="player2";
    }
    else{
        document.getElementById("a1").innerHTML=playername1;
        answer_turn="player1";
    }
    document.getElementById("mathproblem").innerHTML="";
}