/* 
Use a for-of loop to iterate through the array '[1,2,3,4,5]'
and stop when the number '4' is found.
Store the numbers before '4' in an array named 'smallNumbers'
*/
let Numbers = [1,2,3,4,5];
let smallNumber = []

for (const num of Numbers) {
  if (num==4) {
    break;
  }
  smallNumber.push(num)
}
console.log(smallNumber);
