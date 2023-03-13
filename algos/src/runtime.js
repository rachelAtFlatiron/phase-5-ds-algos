/*
    SWBAT
    [ ] define runtime 
    [ ] understand the various types of runtime
    [ ] identify the runtime of basic logic structures
    [ ] understand best, worse, and average case scenarios
*/

//=====================================================

/*
    [ ] TODO: what is the runtime of this function
    [ ] TODO: how can we generalize this function
*/
function a() {
    return 10
}

//=====================================================

/*
    [ ] TODO: what is the runtime of this function
    [ ] TODO: how can we generalize this function
*/
function b() {
    for (let i = 0; i <= 10; i++){
        let sum = i * a()
        console.log(sum)
    }
}

//=====================================================

/*
    [ ] TODO: write out result of function by hand
    [ ] TODO: what is the runtime of this function
    [ ] TODO: how can we generalize this function
*/
function c() {
    for (let i = 1; i <= 3; i++){
        for(let i = 1; i <= 3; i++){
            let sum = i * a()
            console.log(sum)
        }
        console.log()
    }
}

//=====================================================

/*
    [ ] TODO: create single for loop that prints the following
    singleLoop(4) => 
    1
    2
    3
    4
    singleLoop(10) => 
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    [ ] TODO: analyze runtime
*/

function singleLoop(){

}

/*
    [ ] TODO: create nested for loop that prints the following
    nestedLoop(4) => 
    0
    0 1
    0 1 2 
    0 1 2 3
    0 1 2 3 4
    nesedLoop(1) => 
    0 
    0 1
    [ ] TODO: analyze runtime
*/

function nestedLoop(){

}

//=====================================================

/*
    [ ] TODO: implement a function using nested for loops that prints the following:

    triangle(2) => 
    *
    **

    triangle(5) => 
    *
    **
    ***
    ****
    *****
*/

function triangle(x) {

}

//=====================================================

/*
    [ ] TODO: implement a function using for loops that print the following:

    square(2) => 
    **
    **

    square(5) => 
    *****
    *****
    *****
    *****
    *****
*/

function square(x) {

}