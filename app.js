//find sum of a number upto it from 0

const findSum = (num) => {
    //time complexity is O(n)
    let result =0
    for (let i = 0; i <= num; i++){
        result+=i
    }
    return result
}

const findSumConstant = (num) => {
    //time complexity is O(1)
    return num*(num+1)/2
}

//find factorial of a number
const findFactorial = (num) => {
    let result = 1;
    for (let i = num; i >= 1; i--){
        result*=i
        
    }
    return result;
}


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