function reverseNumber(number) {
  const numString = String(number);
  const reversedString = numString.split("").reverse().join(""); // Fixes reverse issue
  const reversedNumber = parseInt(reversedString, 10);
  return reversedNumber;
}

// Example usage:
console.log(reverseNumber(1223)); // Output: 3221
console.log(reverseNumber(987654321)); // Output: 123456789
