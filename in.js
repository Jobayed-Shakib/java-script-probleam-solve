


function woodCalculator(chair, table, bed){
    chairCount = 1 * chair;
    tableCount = 3 * table;
   bedCount = 5 * bed;
   var total = chairCount+tableCount+bedCount;
   return total;
}
var totalCount = woodCalculator(1, 0, 4);
console.log(totalCount);