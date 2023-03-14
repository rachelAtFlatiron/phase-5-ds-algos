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

