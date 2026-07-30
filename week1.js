function classifyNumber(num) {
  let evenOdd = (num % 2 === 0) ? "Even" : "Odd";
  let posNeg = (num >= 0) ? "Positive" : "Negative";
console.log(num + " is " + evenOdd + " and " + posNeg);
}

classifyNumber(-3); // -3 is Odd and Negative
classifyNumber(4);  // 4 is Even and Positive
classifyNumber(0);  // 0 is Even and Positive
classifyNumber(5);  // 5 is Odd and Positive
classifyNumber(6);  // 6 is Even and Positive
classifyNumber(7);  // 7 is Odd and Positive
classifyNumber(-2); // -2 is Even and Negative


function isPrime(n) {
  if (n <= 1) return false; // 0 and 1 are not prime

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false; // found a divisor, not prime
    }
  }
  return true; // no divisors found, prime
}

console.log(isPrime(7));  // true (prime)
console.log(isPrime(9));  // false (divisible by 3)


//switch statement
function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      console.log("Addition performed");
      return a + b;
      break;
    case '-':
      console.log("Subtraction performed");
      return a - b;
      break;
    case '*':
      console.log("Multiplication performed");
      return a * b;
      break;
    case '/':
      console.log("Division performed");
      return a / b;
      break;
    default:
      console.log("Invalid operator");
      return "Invalid operator";
  }
}
// example usage
console.log(calculate(7, 3, '+'));  // Addition performed
console.log(calculate(7, 3, '-'));  // Subtraction performed
console.log(calculate(7, 3, '*'));  // Multiplication performed
console.log(calculate(7, 3, '/'));  // Division performed
console.log(calculate(7, 3, '%'));  // Invalid operator