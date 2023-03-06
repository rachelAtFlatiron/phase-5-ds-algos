//arr is persistent
function swap(left_i, right_i, arr) {
    let left_val = arr[left_i]
    let right_val = arr[right_i]
    arr[left_i] = right_val 
    arr[right_i] = left_val 
}

/* 
    main difference between selection sort and insertion sort 
    selection sort: finds smallest element in unsorted portion and moves to end of sorted list
    insertion sort: gets first element of unsorted portion and swaps until correct place in sorted list
*/


//repeatedly selects smallest element from unsorted portion and moves to sorted portion of list
//swaps with first element of unsorted portion
//O(n^2) because nested for loops
function selection_sort(arr){
    //loop through entire array, 
    for (let unsorted_start = 0; unsorted_start < arr.length; unsorted_start++) {
        let least_i = unsorted_start
        //loop through unsorted array
        for (let i = unsorted_start + 1; i < arr.length; i++) {
            //if we have found lesser value, swap
            if(arr[least_i] > arr[i]){
                least_i = i
            }
        }
        //when found smallest element, swap (see helper)
        swap(unsorted_start, least_i, arr)
        console.log(arr)
    }
    return arr 
}

function insertion_sort(arr) {
    //loop through unsorted portion
        //for unsorted element in unsorted portion
        //loop backwards through sorted portion until swappings are done
            //if unsorted element is less than current sorted element
                //swap adjacent elements unsorted element and current sorted element
            
}

let test = [64, 25, 12, 22, 11]
console.log(selection_sort(test))