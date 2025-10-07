// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index) => {
//     console.log("O elemento no indice " + index + " é " + number);
// });

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number)=>{
    return number * number;
});

console.log(squares); // [1, 4, 9, 16, 25]
