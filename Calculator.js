class Calculator
{
    constructor()
    {
       this.result=0;
    }

    add(no)
    {
         this.result=this.result+no;
    }

    subtract(no)
    {
        this.result=this.result-no;
    }

    multiply(no)
    {
        this.result=this.result*no;
    }

    divide(no)
    {
        if(no==0)
        {
            throw new error();
        }
         this.result=this.result/no;
    }

    clear()
    {
        this.result=0;
    }

    getResult()
    {
        return this.result;
    }

    calculate(str)
    {
        try{

            this.result=eval(str);
               //to check if the value is finite we use isFinite//
            if(!isFinite(this.result))
            {
                throw new error();
            }

        }
        catch{  
          throw new error();
        }

    }
  



}




module.exports=Calculator;

