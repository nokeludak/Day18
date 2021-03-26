// Only change code below this line
function* myGenerator() {
yield* [1, 2, 3, 4, 5];
yield* 'Arena'; 
yield* arguments;
};
let generatorArray = [];
for (const iterator of myGenerator(6, 7, 8)) {
    generatorArray.push(iterator);
 };
console.log(generatorArray);
// Only change code above this line
module.exports = { generatorArray, myGenerator };