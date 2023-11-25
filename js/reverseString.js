function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversedWords = [];
  for (let word of words) {
    let reversedWord = reverseString(word);
    reversedWords.push(reversedWord);
  }
  return reversedWords.join(" ");
}
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseWords("Hey there how are you"));
