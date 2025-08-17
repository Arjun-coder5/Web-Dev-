/* Use a 'for-in' loop to loop that iterate through an array '["chai","green Tea","Herbal Tea","Black Tea"]'
and skip "herbal Tea".
Store the other teas in an array named 'preferredTea'
. */
let teas = ["chai","green Tea","Herbal Tea","Black Tea"]
let preferredTea = []

for (const tea in teas) {
  if (tea==="Herbal Tea") {
    continue;
  }
  preferredTea.push(tea);
}
console.log(preferredTea);
