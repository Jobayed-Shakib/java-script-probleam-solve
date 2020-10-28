function brickCalculator(n){
        if(n<=10){
            var  level1 = n*15;
            var brickForLevel1 = level1*1000;
            return brickForLevel1;
        }
       if(n<=20){
            var level2 = n*12;
            var brickForLevel2 = level2*1000;
            var total = brickForLevel2+30000;
            return total;
        }
         else{
            var level3 = n*10;
            var brickForLevel3 = level3*1000;
            var amount = brickForLevel3+70000;
            return amount;
        }
}
var result = brickCalculator(1);
console.log(result);
