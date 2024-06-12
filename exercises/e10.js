// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let result = [];
  let lowerLetter = '';

  // Convert the letter to lowercase
  for (let i = 0; i < letter.length; i++) {
      if (letter[i] >= 'A' && letter[i] <= 'Z') {
          lowerLetter += String.fromCharCode(letter[i].charCodeAt(0) + 32);
      } else {
          lowerLetter += letter[i];
      }
  }

  for (let i = 0; i < array.length; i++) {
      let lowerName = '';

      // Convert the name to lowercase
      for (let j = 0; j < array[i].name.length; j++) {
          if (array[i].name[j] >= 'A' && array[i].name[j] <= 'Z') {
              lowerName += String.fromCharCode(array[i].name[j].charCodeAt(0) + 32);
          } else {
              lowerName += array[i].name[j];
          }
      }

      // Check if the lowerName contains lowerLetter
      let containsLetter = false;
      for (let k = 0; k <= lowerName.length - lowerLetter.length; k++) {
          let match = true;
          for (let l = 0; l < lowerLetter.length; l++) {
              if (lowerName[k + l] !== lowerLetter[l]) {
                  match = false;
                  break;
              }
          }
          if (match) {
              containsLetter = true;
              break;
          }
      }

      // If the name contains the letter, add it to the result
      if (containsLetter) {
          result.push(array[i].name);
      }
  }

  return result;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
