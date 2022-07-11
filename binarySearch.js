
//Binary Search

//condition==> array is sorted already
const sortedArray = [-3, 3, 5, 10, 33, 99]
const binarySearch = (arr, elem) => {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    
    while (startIndex <= endIndex) {
        let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
        if (arr[middleIndex] == elem) {
            return middleIndex;
        };

        if (arr[middleIndex] < elem) {
            startIndex=middleIndex+1
            
        } else {
            endIndex=middleIndex-1
        }
    }
    

}


//console.log(binarySearch(sortedArray,33))
//time complexity=>O(log n)



//recursive approach

const findElement = (arr, elem, offset) => {
   
    let startIndex = 0;
    let endIndex = arr.length - 1;
    let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    console.log(arr,middleIndex)
    if (arr[middleIndex] == elem) {
        return middleIndex+offset;
    };

    if (arr[middleIndex] < elem) {
        startIndex = middleIndex + 1;
        offset=offset+middleIndex+1
      
        
    } else {
        endIndex = middleIndex ;
    }
  return  findElement(arr.slice(startIndex,endIndex+1),elem,offset)
}


console.log(findElement(sortedArray,33,0))