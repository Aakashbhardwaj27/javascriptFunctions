
//Find if a number is prime or not
//Time complexity=> O(sqrt n) or O(n)
const isPrime = (num) => {
    for (let i = 2; i <(math.sqrt(num)); i++){
        if ((num % i) == 0) {
            return false
       }
    }

    return true
}


// console.log(isPrime(19))