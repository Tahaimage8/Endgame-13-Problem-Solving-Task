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



function isPalindrome(str) {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }

    if (str === reverse) {
        return true;
    } else {
        return false;
    }
}


function sumArray(nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }

    return sum;
}

function countVowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u"
        ) {
            count++;
        }
    }

    return count;
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
