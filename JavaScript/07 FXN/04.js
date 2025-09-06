function makeTea(typeofTea){
  return 'maketea: ${typeofTea}';
}
function processTeaOrder(tea){
  return teaFuction('earl grey')
}
let order = processTeaOrder(makeTea);

console.log(order);