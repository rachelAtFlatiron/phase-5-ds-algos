/*
    SWBAT
    [ ] manually do selection and insertion sort by hand 
    [ ] analyze run time of sorts
    [ ] create helper methods
    [ ] write nested for loops
*/

//=====================================================

/*
    PARAM: 
    i: int, represents index of left element
    j: int, represents index of right element 
    arr: array of elements

    RETURN (opt):
    array with swapped elements
*/

/*
    [ ] TODO: pseudocode
    [ ] TODO: implement
    [ ] TODO: test
*/

function swap(i, j, arr) {
    //swap arr[i] with arr[min_idx]...swap start of unsorted array with least element
    let temp = arr[i] //save arr[i] before it gets overwritten by arr[min_idx]
    arr[i] = arr[j] 
    arr[j] = temp
}

//=====================================================

/*
    PARAM: arr of ints to sort from least to greatest
    RETURN: sorted array of ints
*/

/*
    [ ] TODO: perform a selection sort by hand
    [ ] TODO: pseudocode
    [ ] TODO: implement
    [ ] TODO: test
    [ ] TODO: analyze runtime
*/



function selection_sort(arr){ //O(n^2)
    let min_idx = 0
    //outer for loop, start of unsorted array
    //i < arr.length - 1 ensures we don't have to check last element
    //because an array of length 1 is already sorted
    for(let i = 0; i < arr.length - 1; i++){ 
        min_idx = i //reset min_idx to start at beginning of unsorted array
        //we want j to visit last element, hence j < arr.length
        for(let j = i; j < arr.length; j++) {
            if(arr[min_idx] > arr[j]){ //check which is least, arr[min_idx] or arr[j]
                //update min_idx if arr[j] is smaller
                min_idx = j 
            }
        } 
        //swap 
        swap(i, min_idx, arr)
    }
    return arr
}

//=====================================================

/*
    PARAM: arr of ints to sort from least to greatest
    RETURN: sorted array of ints
*/

/*
    [ ] TODO: perform an insertion sort by hand
    [ ] TODO: pseudocode
    [ ] TODO: implement
    [ ] TODO: test
    [ ] TODO: analyze runtime
*/

const arr = [29, 72, 98, 13, 87, 66, 52, 51, 36]

function insertion_sort(arr) { //O(n^2)
    //start loop at second element until end of array
    //first element is sorted list
    for(let i = 1; i < arr.length; i++) { //i is beginning of our unsorted array
        let j = i //j represents index of element to move backwards

        //while not at start of array AND prev el is > cur el
        while(j != 0 && arr[j] < arr[j - 1]) {
            //swap cur el (j) with prev el (j-1)
            swap(j, j-1, arr) 
            //update pointers 
            j = j-1
        }
    }
}


//=====================================================

/*
    PARAM: arr of ints to sort from least to greatest
    RETURN: sorted array of ints
*/

/*
    [ ] TODO: hand drawn demo 
*/
const mergeArr = [3, 5, 2, 7, 2, 3, 45,6  , 3]

//recursion to split into halves until you get single element arrays

const mergeSort = (array) => {
    //base case: single element arrays
        //return; 
    //recursive case:
        //split array in half, leftArray, rightArray
        //mergeSort(leftArray)
        //mergeSort(rightArray)

        //merge(leftArray, rightArray)
}


//merging of two arrays
//CONSTRAINTS: array.length >= 1, array is sorted ascending
//most people use pointers to depict start of left array, right array
const merge = (leftArray, rightArray) => {
    let temp = [] //push sorted values into temp
    let leftIdx = 0
    let rightIdx = 0
    //while loop: leftIdx <= leftArray.length - 1 , rightIdx <= rightArray.length - 1
        //check if leftArray[leftIdx] < rightArray[rightIdx]
            //temp.push left
            //leftIdx += 1
        //else 
            //temp.push right
            //rightIdx += 1


    //take care of the leftovers
    //if leftIdx < leftArray.length - 1, if leftIdx hasn't reached the end of leftArray
        //push rest of leftArray onto tmp
    //if rightIdx < rightArray.length - 1, if rightIdx hasn't reached the end of rightArray
        //push rest of rightArray onto tmp
}

//merging of two arrays by index
//CONSTRAINTS: array.length >= 1, array is sorted ascending
//most people use pointers to depict start of left array, right array
const mergeByIndex = (array, leftStart, rightEnd) => {

    let leftEnd = Math.floor((leftStart + rightEnd) / 2)
    let rightStart = leftEnd + 1
    //leftArray: index leftStart - index leftEnd of array
    //rightArray: index rightStart - index rightEnd of array


    let tempSorted = [] //push sorted values into temp
    //while loop: leftIdx <= leftArray.length - 1 , rightIdx <= rightArray.length - 1
        //check if leftArray[leftIdx] < rightArray[rightIdx]
            //temp.push left
            //leftIdx += 1
        //else 
            //temp.push right
            //rightIdx += 1


    //take care of the leftovers
    //if leftIdx < leftArray.length - 1, if leftIdx hasn't reached the end of leftArray
        //push rest of leftArray onto tmp
    //if rightIdx < rightArray.length - 1, if rightIdx hasn't reached the end of rightArray
        //push rest of rightArray onto tmp
}


