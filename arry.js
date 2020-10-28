var marks =[45,98,78,65,54,34,25, 100];
var max = marks [0];

for(i=0; i<marks.length; i++){
    var element = marks[i];
    if(element<max){
        max=element;
    }

}
console.log(max);
