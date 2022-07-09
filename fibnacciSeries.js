//fibonacci series 
//time complexity => O(n)
//return nth number in fibnacci series
const fib = (n) => {
    let numbers = [1, 1]
    for (let i = 2; i <= n; i++){
        numbers.push(numbers[i-1]+numbers[i-2])
    }
    return numbers
}


//console.log(fib(5))
