/* 
write a for loop that through the array '["green tea","black tea","oolong tea","chai"]' abd stop the loop when it finds '"chai"'.
Atore all the teas before '"chai"'
in a new array named 'selectedTeas'.
*/

let teas = ["green tea","black tea","oolong tea","chai"]
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i]=='chai') {
    break;
  }
  selectedTeas.push(teas[i]);

  
}
console.log(selectedTeas);
