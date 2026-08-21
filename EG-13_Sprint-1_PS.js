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
    // Write your code here
}



function isPrime(num){
    // Write your code here
}



function mergeSortedArrays(arr1, arr2){
    // Write your code here
}


function findMedian(nums){
    // Write your code here
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