class ToDo{

    constructor()
    {
      this.toDoList=[];
    }
    
    add(str)
    {
       this.toDoList.push(str);
    }
     
    //delete//
    remove(i)
    {
        this.toDoList.splice(i,1);
    }

    
    update(i,str)
    {
        if(i>=this.toDoList.length)
        {
            return;
        }
      this.toDoList[i]=str;
    }


    
    getAll()
    {
     return this.toDoList;
    }
     //get Data with specified index

    get(i)
    {
        if(i>=this.toDoList.length)
        {
            return null;
        }

        return this.toDoList[i];
    }


    
    clear()
    {
     this.toDoList.splice(0,this.toDoList.length);
    }

}



module.exports=ToDo;