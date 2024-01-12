//Stringd (Text/content inside of a single or double quote)

//Only the content within the single or double quotes will display in the terminal
console.log("Ryan Strode");
console.log('Ryan Strode');

//Double quotes and single quotes can both be used inside of a string, but not as duplicates 
console.log('Captain America said, "Avengers Assemble!"');
console.log("We're in the endgame now");

//There are situations where double quotes and single quotes cannot be used inside of a sting
//console.log('THIS DOESN'T WORK');

// The backslash \ (AKA The escape character) allows the special characters to be used in a string
//NOTE: the backslash will NOT appear in the terminal/console
console.log('THIS\'LL WORK');

//Concatenation (adding strings together using a +)
console.log("X" + "Men"); // XMen
console.log("X" + " Men"); // X Men
console.log("x" + " " + "Men"); // X Men

//Length property (Counts the number of characters in the string, and gives the result, also includes the spaces)
console.log("MCU".length); // 3
console.log("Marvel Cinematic Universe".length); // 25

console.log("I".length + "Am".length + "Iron".length + "Man".length); // 10

//Index
//Each character or space in a string has a set Index
/*
Syntax Example

String[Number]
*/
//Each character or space in a sting has a set index, ALWAYS starting at 0
console.log("Marvel"[1]); // a
console.log("Marvel"[0]); // M
console.log("Marvel"[5]); // l