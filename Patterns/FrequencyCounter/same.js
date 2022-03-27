/** 
  Write a function called same, which accepts two arrays. 
  The function should return true if every value in the array has it's corresponding value squared in the second array. 
  The frequency of values must be the same.
  Example:
  same([1,2,3], [4,1,9]) // true
  same([1,2,3], [1,9]) // false
  same([1,2,1], [4,4,1]) // false (must be same frequency)
**/

function sameNaive(arr1, arr2){
    // if length are not same return
    if(arr1.length !== arr2.length){
        return false;
    }
    // Loop through arr1
    for(let i = 0; i < arr1.length; i++){
        // get index of item * 2 of arr1
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // if not found return false
        if(correctIndex === -1) {
            return false;
        }
        // if found remove it.
        arr2.splice(correctIndex,1)
    }
    // Return true since it did not return false in the loop
    return true;
}
// Time complexity O(n^2)
// Space complexity O(1)
console.log(sameNaive([1,2,3,2], [9,1,4,4]));


function sameRefactored(arr1, arr2){
    // if length are not same return
    if(arr1.length !== arr2.length){
        return false;
    }
    // Create hash table for both arrays
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // Add to hash table frequencyCounter1 by looping through array
    for(let val of arr1){
        // if found increment else assign it 1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    // Add to hash table frequencyCounter2 by looping through array
    for(let val of arr2){
        // if found increment else assign it 1
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    // loop through the frequencyCounter1 keys
    for(let key in frequencyCounter1){
        // Find key *2 in frequencyCounter2
        if(!(key ** 2 in frequencyCounter2)){
            // if false return false
            return false
        }
        // Compare the frequency with the frequencyCounter2 value
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            // if false return false
            return false
        }
    }
    // Return true since it did not return false in the loop
    return true
}
// Time complexity O(n)
// Space complexity O(n)
console.log(sameRefactored([1,2,3,2,5], [9,1,4,4,11]));
