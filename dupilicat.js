var number = [2, 1, 2, 3, 46, 3, 2, 4, 3, 2, 3, 3, 46];
var nas =[];
for (var i=0; i<number.length; i++){
   var index = number [i];
    var element  = nas.indexOf(index);
    if(element == -1){
      nas.push(index);  
    }
}
console.log(nas);