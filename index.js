function isPalindrome(word) {
  // Write your algorithm here
//   if(word.charAt(0) === word.charAt(word.length - 1)) {
//     return true 
//   } else  {
//     return false
//   }
// }

  return (word.charAt(0) === word.charAt(word.length - 1))
}

/* 
  Add your pseudocode here
  Need an if statement for the letter of the word to equal the end of the letter of the word 
  If the letters in the word matches then return otherwise (else) return false
*/

/*
  Add written explanation of your solution here
  CharAt(0) reads the first letter of the word 
  CharAt(word.length) return the number of letters in the word and the -1 starts at the end of the word
  then the if statement compares each letter
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
