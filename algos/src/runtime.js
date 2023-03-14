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
function a() { //O(1)
    return 10 
}

//=====================================================

/*
    [x] TODO: what is the runtime of this function
    [x] TODO: how can we generalize this function
*/
function b(n) {
    for (let i = 0; i < n; i++){ //one for loop runs n times and is thus O(n)
        console.log(i) //performs one action O(1)
    }
}

//=====================================================

/*
    [x] TODO: write out result of function by hand
    [x] TODO: what is the runtime of this function
    [x] TODO: how can we generalize this function
*/
function c(n) { //O(n^2)
    for (let i = 1; i <= n; i++){ 
        for(let j = 1; j <= n; j++){
            let sum = j * 10
            console.log(sum)
        }
        console.log()
    }
}
c(10)

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

function singleLoop(n){ //O(n)
    for(let i = 1; i <= n; i++){
        console.log(i)
    }
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

function timesTable(n){ //O(n^2)
    //outer for loop
    for(let i = 1; i <= n; i ++){ //O(n)
        //inner for loop
        let str = ""
        for(let j = 1; j <= n; j++){ //O(n)
            str = str + (j * i) + ' '
        }
        console.log(str)
    }
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
    for(let i = 1; i <= x; i++){ //represents row
        for(let j = 1; j <= i; j++) { //represent column
            process.stdout.write("*") //removes new line
        }   
        console.log()
    }
}

//=====================================================

/*
    [ ] TODO: implement a function using nested for loops that print the following:

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

function square(x) { //O(n^2)
    //outer for loop that represents each row
    for(let row = 0; row < x; row++){
        //inner for loop represents each element for an individual row
        for(let col = 0; col < x; col++){
            process.stdout.write("*") //removes new line
        }
        console.log() //print new line
    }
}
square(5)