// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
      let sumOfDeposits = 0;

      if (array[i].deposits && array[i].deposits.length > 0) {
          for (let j = 0; j < array[i].deposits.length; j++) {
              sumOfDeposits += array[i].deposits[j];
          }
      }

      if (!array[i].deposits || sumOfDeposits < 2000) {
          result.push(array[i]);
      }
  }

  return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
