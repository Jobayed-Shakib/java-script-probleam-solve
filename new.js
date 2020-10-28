function tinyFriend(string) {
        var string = string.split(" ");
        var shortestLength = string[0].length; 
        for(var i = 0; i < string.length; i++){
            if(string[i].length < shortestLength){
            shortestLength = string[i].length;   
            shortest = string[i];            
            }
        }
    return shortest;
}
     var result = tinyFriend('john smith raian mim kabira');
     console.log(result);