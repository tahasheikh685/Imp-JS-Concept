//Destructuring
let obj1= {
    name1: "saqib",
    class1: "7th",
    favtSubj: "math"
}

//Create 3 variables having same values as shown in object
// let name1 = obj1.name1;
// let class1 = obj1.class1;
// let favtSubj = obj1.favtSubj;

// console.log(name1,class1,favtSubj);

let {name1, class1, favtSubj}= obj1; //Destructuring
console.log(name1,class1,favtSubj);

//Create new obj of same prop but change favtSubj
obj2= {...obj1, favtSubj:"Python"};
console.log(obj2);