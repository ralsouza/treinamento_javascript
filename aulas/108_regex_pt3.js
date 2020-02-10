/*
	\s: Character to blank spaces
	\n: Idenfifies line breaks
	\t: Tabulation

	Quantifiers define quantities:

	n. : Any character, except line break
	n+ : Matches any string that contains at least one n. Equivalent to {1,}
	n* : Matches any string that contains zero or more occurrences of n
	n? : Matches any string that contains zero or one occurrences of n
*/

/*
	Denial

	[^abc]

	The match can be done with any item, except with the 
	characters inside the list. a, b or c.
*/

/*
	\W (capitalized)

	Match any character, except alphanumerics.

	For example, pontuation, special characters(Like: ", ç, ô, à, etc), spaces, etc.
*/

/*
	\D

	Nagation of \d, matching any character that aren't digits.
*/

/*
	\S 

	Match any character except blank spaces.

	Trick to match all characters: /[\S\s]/
*/

/*
	Repeaters

	- By interval {n,m}: Match previous item at least n times, maxium m times.

	  For example: Match previous digits at least 2 times and maxium 4 times - /\d{2,4}/

	- By Open inteval {n,}: Match previous item at least n times with no maxium
	
	  For example: Match digits at least once withou maxium = /\d{1,}/

	- By exactly interval {n}: Match previous item exactly n times.

	  For example: Match only 4 digits - /\d{4}/

	- By optional ?: Not once or once occurrence of previous item

	  For example: Match two or three digits - /\d\d\d?/ or match a space followed by a number optionaly /\s\d?/

	- One or more occurrences + : Match one or more occurrences of previous item

	  For example: Match one or more occurrences of s - /s+/ 

	               Match at least three letters in row - /\w+/ 

	- Zero or more occurrences * : Match zero or more occurrences of previus item

	  For example: Match any character followed by any character - /\w*/
/*/

/*
	A useful example:
	
	How to get key values from query string in a URL.
*/

var queryString = 'www.api.com.br?s=lalala&b=bebe&c=cce';

queryString.replace(/[?&](\w+)=(\w+)/g, function( regex, key, value ) {

	if( key === 's') {
		console.log('The result of search to ' + value + ' is: ');
	}

	return;
})
