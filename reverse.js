function alian(tpy) {
 var reverse="";
 for(i=0; i<tpy.length; i++){
    var retu = tpy[i];
    reverse= retu+reverse;
 }
 return reverse;
}
var dat="this is the frist";
var tmu= alian(dat);
console.log(tmu);