function reverseString(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }

    return result;
}

function findMax(nums) {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
}



function isPalindrome(str){
    // Write your code here
}


function sumArray(nums){
    // Write your code here
}

function countVowels(str){
    // Write your code here
}


function twoSum(nums, target){
    // Write your code here
}


function flattenArray(arr){
    // Write your code here

}


function groupAnagrams(strs){
    // Write your code here
}



function lengthOfLongestSubstring(s){
    // Write your code here
}



function deepClone(obj){
    // Write your code here
}
