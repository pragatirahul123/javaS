// Spread operstor 

let a = [1,2,3]
var  b=[...a,4,5,6,7]
console.log(b)




// rest operator

function sum(...num){
    console.log(num)
}
sum(1,2,3,4)