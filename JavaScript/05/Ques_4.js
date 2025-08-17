/* 
write a for loop that multiply each element in the  array [2,4,6,8] by 2 and store the result in a new array name "MultipliedNumbers"
*/
let MultipliedNumbers = [];
let numbers = [2,4,6,8]
for ( let l = 0;l<numbers.length;l++){
  takeNumber =   numbers[l]*2;
  MultipliedNumbers.push(takeNumber);
}
  console.log(MultipliedNumbers);
  
