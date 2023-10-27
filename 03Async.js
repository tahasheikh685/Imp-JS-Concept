//Nature of JavaScript is Asynchronous. It means that which function requires less time will be execute first.
console.log("It's first Output");

setTimeout(()=>
{
    console.log("It's Second Output");
}, 1000);

console.log("It's third Output");