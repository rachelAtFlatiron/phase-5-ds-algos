/*
SWBAT

[ ] how to update and keep track of values
[ ] recursion: base case, etc.
[ ] the run time of loops, variable updates, recursion, etc.
[ ] understand recursive trees
*/


//Fibonacci search

//param n (int): an integer representing the n'th fibonacci number
//constraints: n >= 0
//fib(0) = 0, fib(1) = 1
//returns a single integer that is the n'th number in the fibonacci sequence
function fib(n) {
    let prev = 0 
    let cur = 1
    if (n === 0){
        return prev 
    } else if (n === 1) {
        return cur 
    }
    for (let i = 2; i <= n; i++){
        let oldPrev = prev 
        let oldCur = cur 
        cur = oldPrev + oldCur 
        prev = oldCur 
    }
    return cur 
}

function recursive_fib(n) {
    if(n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    } else {
        return recursive_fib(n - 1) + recursive_fib(n - 2)
    }
}
let n = 3
/*
                f(3)         +           f(2)
        f(2)    +   f(1)            f(1)    +   f(0)
    f(1) + f(0)     1                1          0
    1       0
*/
console.log(fib(n), recursive_fib(n))
