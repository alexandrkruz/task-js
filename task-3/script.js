
 var checkButton = document.getElementById("checkButton");


checkButton.addEventListener("click", function() {

var word = document.getElementById("wordInput").value;
   
word = word.replace(/\s/g, "").toLowerCase();
   
var isPalindrome = true;
for (var i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
    isPalindrome = false;
    break;
    }
}
   
var resultElement = document.getElementById("result");
if (isPalindrome) {
    resultElement.innerHTML = "ДА!";
} else {
    resultElement.innerHTML = "НЕТ";
   }
 });