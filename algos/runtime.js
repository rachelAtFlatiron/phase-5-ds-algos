function a() {
    return 10
}


function b() {
    //what happens when we generalize 90
    for (let i = 0; i <= 10; i++){
        let sum = i * O_1()
        console.log(sum)
    }
}

//what happens when we generalize '3'
function c() {
    for (let i = 1; i <= 3; i++){
        for(let i = 1; i <= 3; i++){
            let sum = i * O_1()
            console.log(sum)
        }
        console.log()
    }
}

//now do selection sort
