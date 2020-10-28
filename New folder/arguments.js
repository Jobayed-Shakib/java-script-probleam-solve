function sumoftotal(num1, num2){
  var sum =0;
  for (let i = 0; i < arguments.length; i++) {
      const num = arguments[i];
      var sum =sum+num;
      
  }
  return sum;

   
}
var result = sumoftotal(9, 20, 3,2);
console.log(result);
