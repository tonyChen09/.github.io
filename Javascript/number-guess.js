var answer = new Array(10);
var guessTime = 5;
var givenAnswer;
window.onload = function(){

function randomNumber()
{
	document.getElementById("numberOfGuess").innerHTML = guessTime;
	document.getElementById("submit").onclick = function(){
		if(guessTime > 0){
	var random = Math.round((Math.random()*10)+1);
	for(i=0;i<answer.length;i++)
	{
		answer[i] = random;
		givenAnswer = answer[i];
	}
	
	var guessNumber = document.getElementById("input").value;
	
	if(guessNumber == givenAnswer){
		document.getElementById("result").innerHTML = "Congratz";
	}else if(guessNumber != givenAnswer)
	{
		if(guessNumber > givenAnswer){
			document.getElementById("hint").innerHTML = "tebakan lebih besar dari angka jawaban !";
		}else if(guessNumber < givenAnswer)
		{
			document.getElementById("hint").innerHTML = "tebakan lebih kecil dari angka jawaban !";
		}
		document.getElementById("result").innerHTML = "try again!";
		guessTime--;
		document.getElementById("numberOfGuess").innerHTML = guessTime;
		if(guessTime == 0)
		{
			document.getElementById("result").innerHTML = "Game Over";
		}
		
	}
		}
	}
	
}
randomNumber();


}





