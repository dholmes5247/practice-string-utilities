function validateInput(str) {
	if(typeof str !== 'string') {
		console.log(`This ${str} must be textual, please enter a "string"!`);
		return false; // returns false if invalid input
	}
	return true; // return true if input is indeed valid
}

// stringUtils.js
function capitalize(str) {
	if (!validateInput(str)) return '';	
	return str.charAt(0).toUpperCase() + str.slice(1) ;
}

	
// console.log(capitalize('hello'));
// console.log(capitalize('today today'));
// console.log(capitalize(52));

function reverse(str) {
	if (!validateInput(str)) return'';
	return str.split('').reverse().join('') 
}


//console.log(reverse("It is a rainy day!")) ;
//console.log(reverse(123456789)) ;
//console.log(reverse("")) ;



function contains (str, substr) {
	if (!validateInput(str)) return 'X';
	return str.includes(substr) 
}


//console.log(contains('I am thirsty today', 'today'));
//console.log(contains('Gunnar is an amazing kid', 'Darren'))
//console.log(contains('Gunnar is a great kid'));

module.exports = {capitalize: capitalize, reverse: reverse, contains: contains} ;