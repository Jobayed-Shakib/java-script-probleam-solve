function tinyFriend(s){
    var wordsArr = s.split(' ');
  
    var shortest = Infinity;
  
    for (var  i = 0; i < wordsArr.length; i++){
      var wordLength = wordsArr[i].length;
      if (wordLength < shortest){
        shortest = wordLength;
      }
    }
  
    return shortest;
  }
  var reson = tinyFriend('lollllcal ol lool nazim illllllllt');
  console.log(reson);