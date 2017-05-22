// // Define a function maxOfTwoNumbers that takes two
// numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
// Do some googling to figure this out if you forget how conditionals work.
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}

// Define a function maxOfThree that takes three numbers as arguments
// and returns the largest of them.
function maxOfThree(num1, num2, num3) {
  return = Math.max(num1, Math.max(num2, num3));
}
function maxOfThree2(a, b, c) {
  return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
function maxOfThree(num1, num2, num3) {
  return (num1 > num2 ? maxOfTwoNumbers(num1, num3) : maxOfTwoNumbers(num2, num3))
}

// Write a function isCharacterAVowel that takes a character
// (i.e. a string of length 1) and returns true if it is a vowel, false otherwise
function isCharaterAVowel(N){
  N = N.toLowerCase()
  if (N == "a" || N == "e"|| N == "i"|| N == "o"|| N == "u" ){
    return("Its A Vowel Woohoo");}
    else {return("Oops Not a Vowel!")};
}
// Define a function sumArray and a function multiplyArray that sums and
// multiplies (respectively) all the numbers in an array of numbers.
// For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}


// Question 4
function multiplyArray(arr) {
  var mul = 1;
  for (var i = 0; i < arr.length; i++){
    mul *= arr[i];
  }
  return mul;
}
//Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var reverseString1 = function(s) {
  return s.split(‘’).reverse().join(‘’);
}
//Write a function findLongestWord that takes an array of words and returns the length of the longest one.
function findLongestWord (str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
//Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
function filterLongWords (arr, i) {
  var ret = [];
  arr.forEach(function(s){
    if (s.length > i) {
      ret += [s];
    }
  });
  debugger;
  return ret;
}
function filterLongWords(arr, i) {
  return arr.filter(function(e, idx) {return arr[idx].length > i; })
}

//Attach the function reverseString (from question 6) to the object String so that it is possible to call: "General Assembly".reverseString().
// Write a function that takes a string as argument and returns an object where:
// the keys are the characters that occur in the string
// the values are the number of occurences for each letter, regardless of the case
var returnObject = function(str){
  charArr = str.split(/\s*/) //whitespace
  var obj = {}
  for (var key in charArr) {
    if (obj.hasOwnProperty(charArr[key])) {
      obj[charArr[key]] += 1
    } else {
      obj[charArr[key]] = 1
    }
  }
  return obj
}
