/*
    SWBAT
    [ ] Draw recursion trees and diagrams
    [ ] Identify base cases and recursive cases
    [ ] Approach the runtime of recursive algorithms
*/

//=====================================================

/*
    PARAM: n, int
    RETURN: boolean, true if n is a power of 2
    Note: true if 2^x = n where x is some integer
*/

/*
    [ ] TODO: find base case and recursive case
    [ ] TODO: draw out the recursive tree by hand
*/


// 64 
// 64/2/2/2/2/2/2...1,
// 5/2/2...0.5 ... 10.25 % 1 = .25

function powerOfTwo(n) {
    // base case: if we get 1, we return true 
    //console.log(n)
    if(n === 1 || n === 0) {
        return true 
    }
    // base case: if we get decimal, we return false
    if (n % 1 !== 0) {
        return false 
    }
    // recursive case: divide n by 2 
    else {
        return powerOfTwo(n/2)
    }
}

// console.log(powerOfTwo(128)) //true
// console.log(powerOfTwo(0)) //true 
// console.log(powerOfTwo(63)) //false
// console.log(powerOfTwo(6)) //false

//=====================================================

/*
    PARAM: n, int
    RETURN: int, n!
    Note: n! = n * n-1 * n-2 * ... * 1
    5! = 5 * 4 * 3 * 2 * 1
*/

/*
    [ ] TODO: find base case and recursive case
    [ ] TODO: draw out the recursive tree by hand
*/

function factorial(n) {
    console.log(n)
    //base case: if n === 1, return 
    if(n === 1) {
        return 1
    //recursive case: 
    } else {
        return factorial(n - 1) * n
    }
}

//=====================================================

/*
    PARAM: n, int
    RETURN: int, the sum of each digit in n
*/

/*
    [ ] TODO: find base case and recursive case
    [ ] TODO: draw out the recursive tree by hand
*/

function sumDigits(n) {
    //base case: get to last number
    if(n < 10) {
        return n
    } else {
    //recursive case:
        //get first / last digit
        return (n%10) + sumDigits(Math.floor(n/10))
    }
}
