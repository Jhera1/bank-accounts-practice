
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  // Your code goes here...
    if (array.length === 0) {
      return 0; 
    }
  
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  
    const average = sum / array.length;
    return average;
  }


/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

export function getStringSum(str) {
  // Your code goes here...
  
  let total = 0;

  // Regular expression to match individual digits in the string
  const regex = /\d/g;
  const matches = str.match(regex);

  if (matches) {
      // Summing up all the integers found
      total = matches.reduce((acc, curr) => acc + parseInt(curr), 0);
  } else {
      // No integers found, return 0
      return 0;
  }

  return total;
    }
  
  

  
   
  

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
