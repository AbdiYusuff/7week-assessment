// ### **2) Unique Characters**
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
// For example:
// `hasUniqueChars("Monday");
// -> True*hasUniqueChars("Moonday");
// -> False*`

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }


// console.log(hasUniqueChars("Monday"))
// runtime: o(1)
// space: o(n)