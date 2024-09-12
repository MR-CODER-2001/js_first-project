                                             /*what is number*/

const account = 500 // java script automatic is value ko data-type number me count karta hai is mathod me 
//console.log(account);

const balance =new Number(1200) // is method se hum khud declare karte hai ki kis data-type me chahiye

//console.log(balance .toString().length); // number ko string me convert karne ke liye .tostring mathod ka use karte hai fir iske baad string ka mathod bhi use kar sakte hai.
 
//console.log(balance.toFixed(2)); //kisi number ke last ke decimal ke baad jitni number chahiye utna value likhna hota hai .tofixed() me

const rupi =500.5698

//console.log(rupi.toPrecision(2)); // is mathod me jo values .toPrecision(2) me declare kiya jata hai usko priority decimak se pehle milti hai.

// ************************* MATHS *************************************************

//console.log(Math); // math apne aap me object hai


//console.log(Math.abs(-4)); // .abs mathod me symbal change ho jata hai negitive value positive me ho jata hai.
//
//console.log(Math.round(4.6)); // .round me decimal me baad 5 se jyada hai to roundup hoke 1 ban jata hai. 
//
//console.log(Math.ceil(6.1)); // .ceil me decimal ke baad .1 value bhi jyada hai fir complete 10 ho jata hai.
//
//console.log(Math.floor(6.9)); // .floor me decimal ke baad 9 bhi ho to fir bhi use count nahi kiya jayega

//console.log(Math.min(12,25,1,25,36,58,45)); // .min mathod me sab se kam value kitni hai wo check  karne  ke liye kuya jata hai.
//
//console.log(Math.max(12,25,1,25,36,58,45)); // .max mathod me sab se bada value kitni hai wo check  karne  ke liye kuya jata hai.

//console.log(Math.random()); //.random 0 and 1 ke andar hi valeu deti hai.


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max -min  +1)) +min); // jab max and min value bhi declare karna pare to input 0 na ane ke liye is mathod ka use karenge .















