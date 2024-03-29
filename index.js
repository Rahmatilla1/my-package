// 1
let Func = (...n) => {
    return n.reduce((a , b) => a + b)
}
console.log(Func(2, 1, 4, 5,));

let number = [12, 2, 1, 4, 7, 8, 9]


// 2
let Numbers = (number, n) => {
    let result = []
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            if (number[i] + number[j] === n) {
                result.push([number[i], number[j]])
            }
        }
    }
    return result;
}

console.log(Numbers(number, 10));