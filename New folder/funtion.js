

function evenFy(num){
    var evenAll =[];
    var result;
    for (let i = 0; i < num.length; i++) {
        var nums  = num[i];
        var result= evenFy(nums);
     
        
   
        if(num%2 ==0){
            var result = num;
    
        }
        else{
            var result = num*2;
                
            
        }evenAll.push(result);
    }return result;
}
var num =[25, 78, 43, 23, 22, 25, 56,];
var result = evenFy(num);
console.log(result);