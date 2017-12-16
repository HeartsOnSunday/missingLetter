
// Get the first letter = firstChar
// Check if next character is the next character in alphabet
// Check if another character is available
// Repeat (loop) step 2 with next character
// Else 
// Return Undefined
// Else
// Return Expected Character
// 97 is  a
// 98 is  b
// 121 is y




function fearNotLetter(str) {
  var firstLetter = str[0];
  //console.log(firstLetter.charCodeAt(0));
  //console.log("code for b is", "b".charCodeAt(0));
  // if (firstLetter.charCodeAt(0) === "")
  for(var i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i + 1) === str.charCodeAt(i) + 1 ){
    //  console.log(str[i]);
      console.log("next character is the next alphabetically");
    } else {
      // now you have to return the missing letter MTHRFCKR
      console.log("found the missing letter!");
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
}
//  console.log('wow');
  return undefined;
}

fearNotLetter("abce");
