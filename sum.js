
function ifsum(number){
    var sum = 0;
for(i=0; i<number.length; i++){
    var total= number[i];
    sum = sum+total;
}
return sum;
}

var result=ifsum(number);
console.log(result);var number = [75,50,75,65,37,20];
var result=ifsum(number);
console.log(result);