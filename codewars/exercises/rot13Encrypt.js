/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message){
  let ansString = '';
  for(let i = 0; i < message.length; i++) {
    let char = message.charCodeAt(i);
    console.log(message[i], char);
    
    if(char >= 65 && char <= 90 || char >= 97 && char <= 122) {
      if(char + 13 > 90 && char <= 90) {
        char = (char + 13 - 90) + 64;
      } else if(char + 13 > 122) {
        char = (char + 13 - 122) + 96;
      } else {
        char = char + 13;
      }
    }
    ansString += String.fromCharCode(char);
  }
  console.log('ANS', ansString);
  return ansString;
}

rot13("aAbB -+=yYzZ!");