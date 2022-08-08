const sumZero = (nums) => {
    for (let i = 0; i< nums.length; i++){
        for (let j=0; j< nums.length; j++){
            (nums[i] + nums[j] === 0) {
                return true;
            }
        }
    } return false;
}

console.log(sumZero[1,2,3])

// runtime complexity: o(n^2)
// space complexity: o(n)