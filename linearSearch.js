//liner search
const linerSearch = (arr, elem) => {
    let index=0
    for (const item of arr) {
        if (item == elem) {
            return index
        }
        index++
    }
}
//time complexity=>O(n)


//console.log(linerSearch([5,3,10,-10,33,51],10))

