function isLeapYear(year){
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
}

function generateFibonacci(n){
if (n <= 0) return [];
    if (n === 1) return [0];
    
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}






function findGCD(a, b){

    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {

        let temp = b;

        b = a % b;

        a = temp;

    }

    return a;

}


function findLCM(a, b){
if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / findGCD(a, b);
}









function isPrime(num){
 if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}






function mergeSortedArrays(arr1, arr2){
let merged = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            merged.push(arr1[i]);
            i++;
        }
        else{
            merged.push(arr2[j]);
            j++;
        }

    }
    while(i < arr1.length){
        merged.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}











function findMedian(nums){
if (!nums || nums.length === 0) return 0;

    const sorted = [...nums].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}



function findSecondLargest(nums){
    // Write your code here
}


function findMode(arr){
    // Write your code here
}


function naturalSort(arr){
    // Write your code here
}