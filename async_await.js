const Prom = new Promise (function(resolve,reject){
    setTimeout(() => {
        resolve("data recieved!!!")
        
    }, 2000);

})

async function sy(){
    const num= await Prom
    console.log(num)
    console.log("Hiii Mona")
}
sy()