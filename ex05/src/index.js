let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5],
  ]);
  
  let arrKey = [];
  
  for (let col of shoppingList.entries()) {
    arrKey.push(`groceries: ${col[0]}`);
  }
  
  let arrValue = [];
  
  for (let col of shoppingList.entries()) {
    arrValue.push(`amount: ${col[1]}`);
  }
  
  console.log(arrKey);
  console.log(arrValue);
  
  for (let col of shoppingList.entries()) {
    console.log(col);
  }
  
  module.exports = { shoppingList, arrKey, arrValue };