/*
    SWBAT
    [ ] how to update and keep track of values
    [ ] recursion: base case, etc.
    [ ] understand recursive trees
    [ ] draw a recursive tree for the fib algorithm

*/

//=====================================================

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34
/*
    PARAM: int representing the nth value in the fib sequence
    RETURN: int of the nth number in the fib sequence
    NOTE: fib(0) = 0, fib(1) = 1
*/

/*
    [ ] TODO: pseudocode
    [ ] TODO: implement
    [ ] TODO: test
    [ ] TODO: what is the runtime of this function
*/

//fib = fib(n) + fib(n - 1) + fib (n - 2) .... fib( 0 )

// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
function fib(n) {
    let prev = 0 // first number in sequence
    let cur = 1 //second number in sequencce
    if(n === 0){
        return prev
    }
    if(n === 1){
        return cur
    }
    for(let i = 2; i <= n; i++){
        //swap 
        let temp = cur //3 
        cur = prev + cur // 5
        prev = temp  //3
    }
    return cur 
}

// console.log(fib(7)) //13
// console.log(fib(0)) //0
// console.log(fib(1)) //1
// console.log(fib(3)) //2




//======================================================

/*
    PARAM: int, represents the nth number in the fib sequence
    RETURN: int, the nth number in the fib sequence
    NOTE: fib(0) = 0, fib(1) = 1
*/

/*
    [ ] TODO: pseudocode cases for recursive_fib
    [ ] TODO: draw the recursive tree for recursive_fib
    [ ] TODO: implement 
    [ ] TODO: test
    [ ] TODO: what is the runtime of recursive_fib(n)?
*/

function recursive_fib(n) {

    //base case: if n === 0 (return 0)
    if(n === 0){
        return 0
    }
    //base case: if n === 1 (return 1)
    if(n === 1) {
        return 1
    } else {
        //recursive case: f(n) = f(n - 1) + f(n - 2)
        return recursive_fib(n - 1) + recursive_fib(n - 2)
    }
}
console.log(recursive_fib(7)) //13
console.log(recursive_fib(0)) //0
console.log(recursive_fib(1)) //1
console.log(recursive_fib(3)) //2


