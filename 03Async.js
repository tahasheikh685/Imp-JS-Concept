//Nature of JavaScript is Asynchronous. It means that which function requires less time will be execute first.
console.log("It's execute first");

//It execute on last because of time delay.
setTimeout(()=>
{
    console.log("It's execute second");
}, 1000);

console.log("It's execute third");