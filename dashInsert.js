function DashInsert(num) { 
  var solution = [];
  for (var i=0; i<num.length; i++){
  var newNum = num[i] % 2;
    console.log(newNum);
    solution.push(num[i]);
    console.log(num[i]);
    if (num[i]%2 !== 0 && num[i+1]%2 !== 0) {
      solution.push('-');
    }
    
  console.log(newNum);
  }
  console.log(solution.join());
  return solution; 
         
}
num =[2,3,1,5,7];
DashInsert(num);