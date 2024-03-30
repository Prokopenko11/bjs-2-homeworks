"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let interestRate = (0.01 * percent) / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** countMonths) - 1)));
  let totalAmount = Number((monthlyPayment * countMonths).toFixed(2));

  return totalAmount;
}