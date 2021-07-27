// Immediately Invovked
    
(function(x,y){
    var z=x+y
    console.log(z)

})(2,3)



// Arrow function

var myfun = ()=>{
    console.log("Life not Easy")
}
myfun()


// Named function

function myfun(x,y){
    var z= x+y
    console.log(z)

}
myfun

//  Anomous Funcction
var my = function(){
    console.log("Navgurukul")
}
my()


//generator function

function *number(){
    var i=1
    while (i<4){
        yield(i)
        i++
    }
}
var main = number()
console.log(main.next().value)
console.log(main.next().value)

console.log(main.next().value)






