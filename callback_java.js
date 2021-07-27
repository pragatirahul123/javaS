// function show(a,b,callback){
//     var z= a+b
//     console.log(z)
// }
// function now(){
//     console.log("Hii Everyone")
// }
// show(2,3,now)



function calculateSum(n, callback) {
    var i;
    var sum = 0;
    for (i = 1; i <= n; i++) { 
      sum += i;
    }
    console.log(`Sum is: ${sum}`);
    callback(sum);
  }
  
  var n = 10;
  calculateSum(n, function(sum){
    console.log(`Average is: ${sum/n}`);
  });
  