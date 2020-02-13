/*
	^ Checks the match at the beginning of the string.

	Obs: Inside a list, this simbol works as nagation, like [^\d] to match with any character
		 except digits.

	Example: Check if the string starts with <

	/^</g
*/

/*
	$ Checks the match at the end of the string.

	Example: Check if the string ends with >

	/>$/g
*/

/*
	m multiline flag, to match with strings in any rows.

	Example: Check if the stirng starts with < in many rows /^</gm

			 Without m flag, the match will happen only firts row.
*/

/*
	? Laziness Repetition, when used after a repetitor like * or + or .
*/

/*
	(?:) grupping without capture

	Example: Matches junho or julho without make a group of capture.

			 ju(?:n|l)ho
*/

/*
	\1, \2 reference inside a regex

	Example: Repeat the first term to capture a second term.

	<(\w+)>.+<\/(\1)> to capture the opening and ending tags
*/
