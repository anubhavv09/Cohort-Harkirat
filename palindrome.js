 function ispalindrome (str )
 {
    let j=str.length-1; 
   for(let i=0;i<str.length;i++)
   {
    if(str[i]!==str[j])
    {
        return false;
    }
    j--;

   }
    return true;
 }

//  var a=[1,2,3,4,5,6];

//  let result=a.map((element,index)=>{

//     return element*2;

//  })

//  let result2=a.reduce((a,b)=>{
//     console.log(a,b);

//     return a+b;

//  })

//  console.log(result);
//  console.log(a);
//  console.log(result2);


let a = new Date();

console.log(a.getMinutes());
console.log(a.getHours());
console.log(a.getSeconds())
  

//  module.exports = isPalindrome;