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
    timesTable(4) => 
    1 2 3 4 
    2 4 6 8
    3 6 9 12
    4 8 12 16
    timesTable(3) => 
    1 2 3
    2 4 6
    3 6 9
    [ ] TODO: analyze runtime
*/

function timesTable(){

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