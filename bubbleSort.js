const sort = (arr) => {
    for (let j = 0; j < arr.length; j++) {
    

        for (let i =  j+1; i < arr.length+1 ; i++){
            if (arr[i] < arr[j]) {
                let temp1 = arr[j];
                let temp2 = arr[i];
                arr[i] = temp1;
                arr[j] = temp2;
            }
        }
    }

    return arr;
    

}


console.log(sort([5, 10, -3, -10, 1, 100, 99]))


//time complexity==>  O(n^2)