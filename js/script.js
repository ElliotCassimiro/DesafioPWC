function reverseWords() {
    const inputText = document.getElementById("inputText1").value;
    const words = inputText.split(" ");
    const reversedWords = words.reverse();
    const output = reversedWords.join(" ");
    document.getElementById("output1").value = output;
}
  
function removeDuplicates() {
          const inputText = document.getElementById("inputText2").value;
          let uniqueChars = "";
          for (let i = 0; i < inputText.length; i++) {
            if (uniqueChars.indexOf(inputText[i]) === -1) {
              uniqueChars += inputText[i];
            }
          }
          document.getElementById("output2").value = uniqueChars;
        }
        
        function longestPalindrome() {
            var input = document.getElementById("inputText3").value;
            var longest = "";
            for (var i = 0; i < input.length; i++) {
              for (var j = i + 1; j <= input.length; j++) {
                var substr = input.substring(i, j);
                if (isPalindrome(substr) && substr.length > longest.length) {
                  longest = substr;
                }
              }
            }
            document.getElementById("output3").value = longest;
          }
          
          function isPalindrome(str) {
            var reversed = str.split("").reverse().join("");
            return str === reversed;
          }