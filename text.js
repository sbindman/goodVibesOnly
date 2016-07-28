//add all of your affirmations here
var text = 'You are so great. Today is going to be a great day! You got this! Dont give up now. You are awesome. You are so close. I know you can do it. Dont worry what other people think, you are fantastic.  You are competent.  You are worthy.  You are wonderful! Think about how hard you have worked.  You have gotten yourself to this position.  You are your greatest asset. Everyone is rooting for you. You are a superstar. You are special. Tomorrow is going to be great. Way to keep a positive outlook.  You have accomplished so much. You have a lot to be proud about.  Think about how much you have grown.  Dont be too hard on yourself.  So many people care about you. You are wonderful.  Anyone that has been successful has also had tough days.  Failure is part of success. Think about all of your accomplishments.  Dont sell yourself short.';

//function to create the markov dictionary
function markovChain(inputText) {
	var words = inputText.split(' ');
	var markov_dict = {};

	var key1=0;
    var key2=1;
    var value=2;

    //loop through words and create dictionary of 2 words (key), with following words (value)
	for (var i=0; i<(words.length - 2); i++) {

		//if key does not exist, add it
        if ( !(markov_dict[words[key1] + ' ' + words[key2]]) ) {
            markov_dict[words[key1] + ' ' +  words[key2]] = []; 
        }
        //otherwise just push new value
        markov_dict[words[key1] + ' ' +  words[key2]].push(words[value]);

        key1 = key1 + 1;
        key2 = key2 + 1;
        value = value + 1;
	}
        
    return markov_dict;
}

//function to build phrase
function buildPhrase(markov_dict) {
	//grab all keys and select a random one
    var allkeys = Object.keys(markov_dict);
    var key = allkeys[Math.floor(Math.random() * allkeys.length)];

    var newtext = key;
    var i = 3;
    var word1 = key.split(' ')[0];
    var word2 = key.split(' ')[1];

	//while key is in dictionary, keep adding     
    while ( markov_dict[word1 + ' ' + word2] && i < 40) {
        i = i + 1;
        var value = markov_dict[word1 + ' ' + word2][Math.floor(Math.random() * markov_dict[word1 + ' ' + word2].length)];
        newtext = newtext + " " + value;
        word1 = word2;
        word2 = value;
    }
         
    return newtext;
}

//jquery for button
$('#affirm').on('click', function() {
	alert(buildPhrase(markovChain(text)));
});


//change color of affirm bar
var i = 1;
//change on interval
var interval = setInterval(function(){ 
	if (i%4 == 0) {
		$('#affirm').css('background-color', 'magenta');
	}
	else if (i%3 == 0) {
		$('#affirm').css('background-color', 'yellow');
	}
	else if (i%2 == 0) {
		$('#affirm').css('background-color', 'cyan');
	}

	////turn on to stop flashing
	// if (i >= 20) {
	// 	window.clearInterval(interval);
	// }

	i++;

}, 300);







