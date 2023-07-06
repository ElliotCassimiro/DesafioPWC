function reverseWords() {
    const inputText = document.getElementById("inputText1").value;
    const words = inputText.split(" ");
    const reversedWords = words.reverse();
    const output = reversedWords.join(" ");
    document.getElementById("output1").value = output;
}
  
