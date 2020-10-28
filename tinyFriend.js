function brickCalculator(level){
    var building = 0;
    for(i=0; i<level;){
        if(level<=10){
            building = level1;
            var level1= 15;
            brickForLevel1 = level1*1000;
        }
        else if(level<=20){
            building = level2;
           var level2 = 12;
           var brickForLevel2 = level2*1000;

        }
        else{
            building = level3;
            level3 = 10;
            brickForLevel3 = level3 * 1000;

        }
        var building = brickForLevel1+brickForLevel2+brickForLevel3;
    }
        return building;
}
var result = brickCalculator(7);
console.log(result);