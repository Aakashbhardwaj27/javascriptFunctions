

//Q. find the minimum value in array
const minValue = (arr) => {
    let min = arr[0];
    for (elem of arr) {
        if (elem < min) {
            min=elem
        }
    }
    return min
}

//console.log(minValue([5,2,9,3,6]))

