//Spread Operator

arr1= [1,2,3,4,5,6];
arr2= [7,8,9,10,11];

function abc(a,b,c){
 return a+b+c/2;
}

let a= abc(...arr2);
console.log(a);

result= [...arr1, ...arr2];
console.log(result);