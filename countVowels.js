
function countVowels(str)
{

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result=str.toLowerCase();
     let count=0;
    for(let i=0;i<result.length;i++)
    {
       if(vowels.includes(result[i]))
       {
        count=count+1;
       }
    }

    return count;

}

module.exports = countVowels;