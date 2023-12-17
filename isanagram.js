
function isAnagram(str1,str2)
{
   
let result1=str1.toLowerCase();
let result2=str2.toLowerCase();

if(result1.length!=result2.length)
{
    return false;
}

  const map={};
  const map2={};
    for(let i=0;i<result1.length;i++)
    {
      
        if(map[result1[i]])
        {
           map[result1[i]]++;
        }
        else{
            map[result1[i]] = 1;
        }

        
        if(map2[result2[i]])
        {
           map2[result2[i]]++;
        }
        else{
            map2[result2[i]] = 1;
        }


    }
    const keys1 = Object.keys(map);
    console.log(keys1);

    for (let key of keys1) {
        if (map[key] !== map2[key]) {
            return false;
        }
    }
    return true;


}





module.exports = isAnagram;