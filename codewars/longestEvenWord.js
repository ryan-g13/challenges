function longestEvenWord(sentence) {
  let parsedSentence = sentence.split(" ");
  let longestWord = '';
  console.log(parsedSentence);
  parsedSentence.forEach(word => {
      if (word.length % 2 === 0 && word.length > longestWord.length) {
          longestWord = word;
          console.log('assigning longestWord');
      }
  });
  if (longestWord.length > 0) {
      return longestWord;
  } else {
      return '00';
  }
}

let sentence = 'It was a pleasent day';
longestEvenWord(sentence);