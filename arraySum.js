




//find sum of numbers of an array
const arrSum1 = (arr) => {
    let result=0
    for (let i = 0; i < arr.length; i++){
        result+=arr[i]
    }

    return result;
}

const arrSum = (arr) => {
    let result = 0;
    for (const num of arr) {
        result+= num
    }
    return result;
}
const arrSumReduced=arr => arr.reduce((a,b)=>a+b)



//console.log(arrSum([1, 2, 3, 4, 5]))
//console.log(arrSumReduced([1,2,3,4,5]))
// console.log(findSum(4))
// console.log(findFactorial(5))
// console.log(findSumConstant(4))

