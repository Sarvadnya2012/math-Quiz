player_1 = localStorage.getItem("Player_1");
player_2 = localStorage.getItem("Player_2");

Player1_score = 0;
Player2_score = 0;

var operation = "";

document.getElementById("player1_name").innerHTML = player_1 + ": ";
document.getElementById("player2_name").innerHTML = player_2 + ": ";
document.getElementById("player1_score").innerHTML = Player1_score;
document.getElementById("player2_score").innerHTML = Player2_score;
document.getElementById("question").innerHTML = "Question Turn - " + player_1;
document.getElementById("answer").innerHTML = "Answer Turn - " + player_2 ;

function Add(){
    number1 = document.getElementById("no1").value;
	number2 = document.getElementById("no2").value;
	actual_answer = parseInt(number1) + parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>Q. " + number1 + " + "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='Check1()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
    
}


function Sub(){
    number1 = document.getElementById("no1").value;
	number2 = document.getElementById("no2").value;
	actual_answer = parseInt(number1) - parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>Q. " + number1 + " - "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='Check2()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
    
}


function Multiplication(){
    number1 = document.getElementById("no1").value;
	number2 = document.getElementById("no2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>Q. " + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='Check3()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
    
}

function Division(){
    number1 = document.getElementById("no1").value;
	number2 = document.getElementById("no2").value;
	actual_answer = parseInt(number1) / parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>Q. " + number1 + " / "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='Check4()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
    
}

question_turn = "player1";
answer_turn = "player2";

function Check1()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			Player1_score = Player1_score +1;
		    document.getElementById("player1_score").innerHTML = Player1_score;
		}
		else 
		{
			Player2_score = Player2_score +1;
		    document.getElementById("player2_score").innerHTML = Player2_score;
		}
	}
	
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("question").innerHTML = "Question Turn - " + player_2 ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("question").innerHTML = "Question Turn - " + player_1 ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
        document.getElementById("answer").innerHTML = "Answer Turn - " + player_2 ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("answer").innerHTML = "Answer Turn - " + player_1 ;
	}

    document.getElementById("output").innerHTML = "";
}


function Check2()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			Player1_score = Player1_score +1;
		    document.getElementById("player1_score").innerHTML = Player1_score;
		}
		else 
		{
			Player2_score = Player2_score +1;
		    document.getElementById("player2_score").innerHTML = Player2_score;
		}
	}
	
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("question").innerHTML = "Question Turn - " + player_2 ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("question").innerHTML = "Question Turn - " + player_1 ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
        document.getElementById("answer").innerHTML = "Answer Turn - " + player_2 ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("answer").innerHTML = "Answer Turn - " + player_1 ;
	}

    document.getElementById("output").innerHTML = "";
}


function Check3()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			Player1_score = Player1_score +1;
		    document.getElementById("player1_score").innerHTML = Player1_score;
		}
		else 
		{
			Player2_score = Player2_score +1;
		    document.getElementById("player2_score").innerHTML = Player2_score;
		}
	}
	
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("question").innerHTML = "Question Turn - " + player_2 ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("question").innerHTML = "Question Turn - " + player_1 ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
        document.getElementById("answer").innerHTML = "Answer Turn - " + player_2 ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("answer").innerHTML = "Answer Turn - " + player_1 ;
	}

    document.getElementById("output").innerHTML = "";
}


function Check4()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			Player1_score = Player1_score +1;
		    document.getElementById("player1_score").innerHTML = Player1_score;
		}
		else 
		{
			Player2_score = Player2_score +1;
		    document.getElementById("player2_score").innerHTML = Player2_score;
		}
	}
	
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("question").innerHTML = "Question Turn - " + player_2 ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("question").innerHTML = "Question Turn - " + player_1 ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
        document.getElementById("answer").innerHTML = "Answer Turn - " + player_2 ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("answer").innerHTML = "Answer Turn - " + player_1 ;
	}

    document.getElementById("output").innerHTML = "";
}

