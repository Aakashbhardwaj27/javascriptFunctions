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