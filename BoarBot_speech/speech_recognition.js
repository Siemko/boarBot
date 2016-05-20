var recognition = new webkitSpeechRecognition();

recognition.continuous = true;
//recognition.interimResults = true;
//recognition.lang = "pl";
recognition.start();