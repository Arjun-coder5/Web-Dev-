/* 
 write a do-while loop that prompts a user to enter their favourite tea type until they enter '"Stop"' .
 store each tea type in an array named 'teaCollection'.
 */
  let teaCollection = []
  let tea 
 do {
 tea = prompt('Enter your favourite tea (type "stop" to finish)')
 if (tea != "stop") {
  teaCollection.push(tea)
 }
 } while (tea!=stop);
console.log(teaCollection);
