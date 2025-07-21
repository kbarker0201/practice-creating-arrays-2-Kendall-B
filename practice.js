// Task 1
let newArr = Array(5);
newArr.fill("Hello");
console.log(newArr);

// Task 2 
newArr.fill("What!", 2, 4);
console.log(newArr);

// Task 3 
let secondArr = Array(5);
for (let i = 0; i < secondArr.length; i++) {
 secondArr[i] = i * 10; // Fill each slot with i2
}
console.log(secondArr);