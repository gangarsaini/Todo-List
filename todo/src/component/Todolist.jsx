import React, { useState } from 'react'
import TodoItem from './TodoItem';
  
function Todolist() {
const [input, setInput] = useState('');
const [item,setItem] = useState([]);
const [mark , setMark] =  useState(false);


function addList(){
   if(input== 0) return;
    setItem([...item, input]);
    setMark(true)
    setInput("")
}

function deleteItem(indexDelete){
//console.log(index)
const StoreDelete =  item.filter((_,index)=> index !== indexDelete);
setItem(StoreDelete);
}

return (
    <div>
      <div className='todoitem'>
      <input type="text" value={input} placeholder='Enter the task' onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={()=>addList()} >Add</button>

    </div>
      <TodoItem   deleteItem={deleteItem} mark={mark} item={item}/>
    </div>
  )
}

export default Todolist
