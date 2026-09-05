var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
};

var moveZeroes = function (nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }

  while (index < nums.length) {
    nums[index] = 0;
    index++;
  }
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let a = s.split("").sort().join("");
  let b = t.split("").sort().join("");

  return a === b;
};

var canConstruct = function (ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    let letter = ransomNote[i];

    let index = magazine.indexOf(letter);

    if (index === -1) {
      return false;
    }

    magazine = magazine.slice(0, index) + magazine.slice(index + 1);
  }

  return true;
};

var majorityElement = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }

    if (count > nums.length / 2) {
      return nums[i];
    }
  }
};

var threeSum = function (nums) {
  let result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let triplet = [nums[i], nums[j], nums[k]];

          let exists = false;

          for (let item of result) {
            if (
              item[0] === triplet[0] &&
              item[1] === triplet[1] &&
              item[2] === triplet[2]
            ) {
              exists = true;
            }
          }

          if (!exists) {
            result.push(triplet);
          }
        }
      }
    }
  }

  return result;
};

var subarraySum = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum = sum + nums[j];

      if (sum === k) {
        count++;
      }
    }
  }

  return count;
};
var topKFrequent = function (nums, k) {
  let count = {};

  for (let num of nums) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  let numbers = Object.keys(count);

  numbers.sort(function (a, b) {
    return count[b] - count[a];
  });

  let result = [];

  for (let i = 0; i < k; i++) {
    result.push(Number(numbers[i]));
  }

  return result;
};
var longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);

  let longest = 0;
  let current = 1;

  if (nums.length === 0) {
    return 0;
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      current++;
    } else if (nums[i] !== nums[i - 1]) {
      current = 1;
    }

    if (current > longest) {
      longest = current;
    }
  }

  return longest;
};

var sortColors = function (nums) {
  let zero = 0;
  let one = 0;
  let two = 0;

  for (let num of nums) {
    if (num === 0) {
      zero++;
    } else if (num === 1) {
      one++;
    } else {
      two++;
    }
  }

  let index = 0;

  while (zero > 0) {
    nums[index] = 0;
    index++;
    zero--;
  }

  while (one > 0) {
    nums[index] = 1;
    index++;
    one--;
  }

  while (two > 0) {
    nums[index] = 2;
    index++;
    two--;
  }
};
