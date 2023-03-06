/*
SWBAT
[ ] define runtime 
[ ] understand the various types of runtime
[ ] identify the runtime of basic logic structures
*/

/*
TODO: what is the runtime of this function
*/
function a() {
    return 10
}

/*
TODO: what is the runtime of this function
TODO: how can we generalize this function
*/
function b() {
    for (let i = 0; i <= 10; i++){
        let sum = i * O_1()
        console.log(sum)
    }
}

/*
TODO: what is the runtime of this function
TODO: how can we generalize this function
*/
function c() {
    for (let i = 1; i <= 3; i++){
        for(let i = 1; i <= 3; i++){
            let sum = i * O_1()
            console.log(sum)
        }
        console.log()
    }
}

