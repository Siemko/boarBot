function conversation() {

var bot = new cleverbot("9TW4WJHfp3zw0M1V", "bGYQbOvNwuHZJvXeE9vWv28WGI7EVEEn");
					bot.create(function (err, session) {
						
		//Reaguj na odpowiedź
        recognition.onresult = function(event) { 
			for (var i = event.resultIndex; i < event.results.length; ++i) {
				
				if (event.results[i].isFinal) {
					document.getElementById("text_area").value += "\n"+"Ty: "+event.results[i][0].transcript;
					console.log(event.results[i][0]);
					
					  bot.ask(event.results[i][0].transcript, function (err, response) {
					console.log(response);
						  if (err || !response) {
					document.getElementById("text_area").value += "\n"+"Boar-bot: "+"Zapytaj o coś innego :)";
					  var msg = new SpeechSynthesisUtterance("Zapytaj o coś innego!");
					  window.speechSynthesis.speak(msg);
							  setTimeout(function(){}, 3500);	
						  }
						  else
						  {
					  document.getElementById("text_area").value += "\n"+"Boar-bot: "+response;
					  var msg = new SpeechSynthesisUtterance(response);
					  window.speechSynthesis.speak(msg);
					  setTimeout(function(){}, 3500);	
						  }
					});
				}
			}
		};
							});
}