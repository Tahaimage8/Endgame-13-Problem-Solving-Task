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


function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
}


function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {
            let smallArray = flattenArray(arr[i]);

            for (let j = 0; j < smallArray.length; j++) {
                result.push(smallArray[j]);
            }

        } else {
            result.push(arr[i]);
        }
    }

    return result;
}


function groupAnagrams(strs) {
    let result = [];

    for (let i = 0; i < strs.length; i++) {
        let word = strs[i].split("").sort().join("");
        let found = false;

        for (let j = 0; j < result.length; j++) {
            let firstWord = result[j][0].split("").sort().join("");

            if (word === firstWord) {
                result[j].push(strs[i]);
                found = true;
                break;
            }
        }

        if (found === false) {
            result.push([strs[i]]);
        }
    }

    return result;
}



function lengthOfLongestSubstring(s){
    // Write your code here
}



function deepClone(obj){
    // Write your code here
}
