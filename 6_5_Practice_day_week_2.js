/* 
0 - 39 = c
40 - 59 = b
60 - 69 = a-
70 - 79 = a
80 - 100 = a+
*/

const result = 44;

if (result < 0 || result > 100) {
    console.log("Invalid")
} else if (result >= 0 && result <= 39) {
    console.log("C");
} else if (result >= 40 && result <= 59) {
    console.log("B");
} else if (result >= 60 && result <= 69) {
    console.log("A-");
} else if (result >= 70 && result <= 79) {
    console.log("A");
} else if (result >= 80 && result <= 100) {
    console.log("A+");
}

console.log("------------------")
// even odd function
const num = 15;

if (num % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd")
}

console.log("------------------")

// sorting 1-20
const arr = [2, 14, 20, 1, 4, 5, 17, 6, 9, 7, 12, 3, 15, 19, 8, 16, 18, 10, 11, 13];
arr.sort((a, b) => a - b);
console.log(arr)

/* 
let numArray = [2, 14, 20, 1, 4, 5, 17, 6, 9, 7, 12];
numArray.sort(function(a, b) {
  return a - b;
});
*/

console.log("------------------")

const year = 2000;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not Leap year");
}

console.log("------------------")

// find out the numbers in 1-50 thats are divisible by 3 & 5

for(let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

console.log("------------------")

// longest name in length
let friends = ["rahim", "karim", "abdul", "sadsf", "heroAlom"];

let longestName = [0]
for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if(element.length > longestName.length) {
        longestName = element;
    }
    
}
console.log(longestName);

console.log("------------------")

// unique numbers
const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const uniqueNums = [];

for(let i = 0; i < numbers.length; i++) {
    const ele = numbers[i];
    
    if(!uniqueNums.includes(ele)) {
        uniqueNums.push(ele);
    }
}
console.log(uniqueNums)

console.log("------------------")

// find the max number
const maxNumsArr = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.max(...maxNumsArr))

console.log("------------------")

// Shahed's monthly saving function

const totalIncome = (allPayments) => {
    let sum = 0;
    for (let i = 0; i < allPayments.length; i++) {
        sum += allPayments[i];
    }
    return sum;
}

const monthlySavings = (allPayments, livingCost) => {
    let totalTax = 0;

    if (!Array.isArray(allPayments) || typeof livingCost !== 'number') {
        return "Invalid Input";
    }

    for (let i = 0; i < allPayments.length; i++) {
        if (allPayments[i] >= 3000) {
            totalTax += allPayments[i] * 0.2;
        }
    }

    const totalIncomeAfterTax = totalIncome(allPayments) - totalTax;
    const savings = totalIncomeAfterTax - livingCost;

    if (savings >= 0) {
        return savings;
    } else {
        return "earn more";
    }
}

const allPayments = [900, 2700, 3400];
const livingCost = 10000;

const res = monthlySavings(allPayments, livingCost);
console.log(res)