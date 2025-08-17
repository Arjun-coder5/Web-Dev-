/* 
Write a for loop that loop through the array '["London","Paris","New York","Berlin"]' and skips '"Paris"'
Store the other cities in a new array named 'viditors'.
*/
let cities = ["London","Paris","New York","Berlin"]
let visitedCities = []
for (let i = 0; i < cities.length; i++) {
  if(cities[i]=== 'paris' || cities[i]=== "Paris"){
  continue;
  }
 visitedCities.push(cities[i]);
  
}
console.log(visitedCities);