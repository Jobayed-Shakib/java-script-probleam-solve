var speech = "i  am a bad    boy.";
var count=0;

for(i=0; i<speech.length; i++){
    var char = speech[i];
    if(char==" "&& speech[i-1] !=" "){
        count++;
    }
}
count++;
console.log(count)