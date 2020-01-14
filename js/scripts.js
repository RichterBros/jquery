
// var firstLast = function(userWord){
// var newWordArray = userWord.split("");


// var lastLetter = newWordArray.pop().toUpperCase();


// var firstLetter = newWordArray.shift().toUpperCase();

// var middleLetters = newWordArray.join(""); 

// var end = firstLetter + middleLetters + lastLetter

// return end;



// };





// $(document).ready(function(){

//   var userword = prompt("enter a word")
  
  
//   alert(firstLast(userword));
// });



$(document).ready(function(){

  var userSentence = prompt("enter a sentence");

  var capitol = function(){
    var firstLetter = userSentence.length(0);
    return firstLetter
  }

  console.log(capitol());


 });


