function createTeaMaker(){
  return function(teaType){
    return `Making ${teaType}`;
  };
}

let teaMaker = createTeaMaker();
let result = teaMaker("Green Tea");
console.log(result);
