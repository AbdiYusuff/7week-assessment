const isPangram = (string) => {
 
    const result = new Set(string.toLwerCase().match(/[a-z]/g).size === 26)
};

console.log(isPangram("The quick brown fox jumps over teh layz dog!"))

// runtime complexity o(n)
// spacetime complexity o(n)