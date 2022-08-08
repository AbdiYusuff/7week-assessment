const findLongestWord = (words) => {
    return words.sort((a,b)=> b.length -a.length)[0]
};
console.log(findLongestWord(["hi", "hello"]))

// Runtime Complexity: o(n log(n))
// Spacetime Complexity: o(n)
