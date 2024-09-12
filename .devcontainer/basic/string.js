let name = "Rani"
let love = " I love you jaan"

//console.log(name + love); // This is old formate

//console.log(`${name} ${love}`);

const Username = new String('sarfraz-rani') 

//console.log(Username [0]); //key values access method

//console.log(Username.length); // lenth methos

//console.log(Username.toUpperCase()); // values ko upper case me karne ke liye 

//console.log(Username.charAt(3));  //konsa letter konse position matlab konse number pe hai wo check karne ke liye  number ke throw

//console.log(Username.indexOf('z'));  // konsa letter konse position matlab konse number pe hai wo check karne ke liye  charactor ke throw

//console.log(Username.indexOf('z'));

//const newstring = Username.substring(0,5) // kitne charactor lene hai uske liye.

//console.log(newstring);

const anotherstring = Username.slice(-6, 5) // kitne charactor lene hai uske liye lekin is me negitive values bhi bhi de sakte hai
//console.log(anotherstring);

const space = "    Sarfraz"
//console.log(space);
//console.log(space.trim()); // trim extra space remove karta hai 

const url = "http:// sarfraz.com/sarfraz%20khan"

console.log(url.replace('%20', '-'));//  replace ka use jo component hame remove karna hai uske jake jis componentko dalna hai usko replace karne ke liye.
console.log(url.includes('rani')); // includes ka use koi word variable me hai ya nahi wo check karne ke liye use hota hai