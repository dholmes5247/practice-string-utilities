function validateInput(str) {      // trying to validate the input is a string and prompt user if not
	if(typeof str !== 'string') {
		console.log(`This ${str} must be textual, please enter a "string"!`);
		return false; // returns false if invalid input
	}
	return true; // return true if input is indeed valid
}

// stringUtils.js  Capatilizing the first letter of a string
function capitalize(str) {
	if (!validateInput(str)) return '';	
	return str.charAt(0).toUpperCase() + str.slice(1) ;
}

	
// console.log(capitalize('hello'));
// console.log(capitalize('today today'));
// console.log(capitalize(52));

function reverse(str) {  //reverses the order of a string
	if (!validateInput(str)) return'';
	return str.split('').reverse().join('') 
}


//console.log(reverse("It is a rainy day!")) ;
//console.log(reverse(123456789)) ;
//console.log(reverse("")) ;



function contains (str, substr) { // searches to see if it contains a particular substring
	if (!validateInput(str)) return '';
	return str.includes(substr) 
}


//console.log(contains('I am thirsty today', 'today'));
//console.log(contains('Gunnar is an amazing kid', 'Darren'))
//console.log(contains('Gunnar is a great kid'));

module.exports = {capitalize: capitalize, reverse: reverse, contains: contains} ;