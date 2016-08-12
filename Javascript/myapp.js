window.onload = function(){

	function checkAnswer(){
	document.getElementById("submit").onclick = function()
	{
		
		
		var answer = [];
		answer[0] = "hyper text markup language";
		answer[1] = "uniform resource locator";
		var userAnswer = [];
		userAnswer[0] = document.getElementById("answer1").value;
		userAnswer[1] = document.getElementById("answer2").value;
		
		if(userAnswer[0] == answer[0] && userAnswer[1] == answer[1])
		{
			document.getElementById("result").innerHTML = "Correct All";
		}else if(userAnswer[0] == answer[0] || userAnswer[1] == answer[1])
		{
			document.getElementById("result").innerHTML = "Correct ones";
		}else{
			document.getElementById("result").innerHTML = "Fail";
		}
		
	}
	}
		
   
	checkAnswer();

}
