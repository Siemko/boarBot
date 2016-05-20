function ask(text, callback) {
		
		//Zadaj pytanie
	    var msg = new SpeechSynthesisUtterance('Chrum chrum, zapytaj o coś');
		window.speechSynthesis.speak(msg);
        
        recognition.onend = function (e) {
            if (callback) {
                callback('Brak wyników!');
            }
        }

		//Reaguj na odpowiedź
        recognition.onresult = function(event) { 
			for (var i = event.resultIndex; i < event.results.length; ++i) {
				
				if (event.results[i].isFinal) {
					
					document.getElementById("text_area").value = event.results[i][0].transcript;
					console.log(event.results[i][0]);
					
					if(event.results[i][0].transcript == 'burbot' || event.results[i][0].transcript == ' burbot' 
					|| event.results[i][0].transcript == ' borbud') {
					var msg = new SpeechSynthesisUtterance('Chrum chrum!');
					window.speechSynthesis.speak(msg);
					}
					
					if(event.results[i][0].transcript == 'czy guzy ma iść na wykład' || event.results[i][0].transcript == ' czy guzy ma iść na wykład' || event.results[i][0].transcript == ' czy kuzyn ma iść na wykład') {
					var msg = new SpeechSynthesisUtterance('No kurwa raczej');
					window.speechSynthesis.speak(msg);
					}
					
					if (event.results[i][0].transcript == 'nie' || event.results[i][0].transcript == ' nie'){
					var msg = new SpeechSynthesisUtterance('Chrum, chrum, masz rację!');
					window.speechSynthesis.speak(msg);
					}
					
					if (event.results[i][0].transcript == 'Adaśko i Świerczek' || event.results[i][0].transcript == ' Adaśko i Świerczek'){
					var msg = new SpeechSynthesisUtterance('To kryptogeje');
					window.speechSynthesis.speak(msg);
					}
				}
			}
		};
}