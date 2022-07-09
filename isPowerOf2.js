//is Power of two

//time complexity ===> O(log n)

const isPrTwo = (n) => {
    console.log(n)
    if (n === 1) {
        return true
    }
    if (n < 1) {
        return false
    }
    if ((n % 2) === 0) {
       return Number.isInteger(n/2)?isPrTwo(n/2):false
    } else {
        return false
    }

}
// console.log(isPrTwo(12))

//or


const isPrTwo2 = (number) => {
    if (number < 1) {
        return false
    };
    let dividedNumber=number
    while (dividedNumber !== 1) {
        if ((dividedNumber % 2) !== 0) {
            return false
        }
        dividedNumber=dividedNumber/2
    }

    return true
}


//improved time complexity=> O(1)
//bitwise operator
const isPrTwo3 = (n) => {
    if (n < 1) {
        return false
    }

    return (n & (n-1)) ===0
}


console.log(isPrTwo3(12))