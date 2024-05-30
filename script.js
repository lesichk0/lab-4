// 1.1. findMinLengthOfThreeWords
function findMinLengthOfThreeWords(word1, word2, word3) {
    return Math.min(word1.length, word2.length, word3.length);
}
console.log(findMinLengthOfThreeWords('a', 'bee', 'see')); // 1

// 1.2. filterOddElements
function filterOddElements(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(filterOddElements([1, 2, 3, 4, 5])); // [1, 3, 5]

// 1.3. getLengthOfShortestElement
function getLengthOfShortestElement(arr) {
    if (arr.length === 0) return 0;
    let minLength = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < minLength) {
            minLength = arr[i].length;
        }
    }
    return minLength;
}
console.log(getLengthOfShortestElement(['one', 'two', 'three', 'four'])); // 3

// 1.4. joinArrayOfArrays
function joinArrayOfArrays(arr) {
    return arr.reduce((acc, curr) => acc.concat(curr), []);
}
console.log(joinArrayOfArrays([[1, 2], [3, 4], [5, 6]])); // [1, 2, 3, 4, 5, 6]

// 1.5. findSmallestNumberAmongMixedElements
function findSmallestNumberAmongMixedElements(arr) {
    if (arr.length === 0) return 0;
    let numbers = arr.filter(item => typeof item === 'number');
    if (numbers.length === 0) return 0;
    return Math.min(...numbers);
}
console.log(findSmallestNumberAmongMixedElements([4, 'a', 3, 9, 'b'])); // 3

// 1.6. computeSummationToN
function computeSummationToN(n) {
    if (n < 1) return 0;
    return n * (n + 1) / 2;
}
console.log(computeSummationToN(4)); // 10

// 1.7. convertScoreToGrade
function convertScoreToGrade(score) {
    if (score < 0 || score > 100) return 'INVALID SCORE';
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    if (score >= 50) return 'E';
    return 'F';
}
console.log(convertScoreToGrade(85)); // B

// 1.8. getLongestOfThreeWords
function getLongestOfThreeWords(word1, word2, word3) {
    let longest = word1;
    if (word2.length > longest.length) longest = word2;
    if (word3.length > longest.length) longest = word3;
    return longest;
}
console.log(getLongestOfThreeWords('cat', 'dog', 'elephant')); // elephant

// 1.9. multiply
function multiply(a, b) {
    let result = 0;
    let positive = Math.abs(b);
    for (let i = 0; i < positive; i++) {
        result += a;
    }
    return b < 0 ? -result : result;
}
console.log(multiply(3, 4)); // 12

// 1.10. computeSumBetween
function computeSumBetween(num1, num2) {
    if (num2 < num1) return 0;
    let sum = 0;
    for (let i = num1 + 1; i < num2; i++) {
        sum += i;
    }
    return sum;
}
console.log(computeSumBetween(1, 4)); // 5 (2 + 3)
