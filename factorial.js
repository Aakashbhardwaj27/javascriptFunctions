//find factorial of a number

//time complexity===> O(n)
const findFactorial = (num) => {
    let result = 1;
    for (let i = num; i >= 1; i--){
        result*=i
        
    }
    return result;
}