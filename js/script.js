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

          function capitalizeSentences() {
            const inputText = document.getElementById("inputText4").value;
            const sentences = inputText.split(". ");
            const capitalized = sentences.map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1));
            const output = capitalized.join(". ");
            document.getElementById("output4").value = output;
          }
          
          function isAnagramPalindrome() {
            const input = document.getElementById("inputText5").value;
            const charCount = {};
            
            for (let i = 0; i < input.length; i++) {
              const char = input[i];
              charCount[char] = (charCount[char] || 0) + 1;
            }
            
            let oddCount = 0;
            for (const char in charCount) {
              if (charCount[char] % 2 !== 0) {
                oddCount++;
              }
            }
            
            const output = oddCount <= 1 ? "true" : "false";
            document.getElementById("output5").value = output;
          }