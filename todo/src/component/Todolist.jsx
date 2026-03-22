import React, { useState } from 'react'
import TodoItem from './TodoItem';
import './layout.css';

function Todolist() {
const [input, setInput] = useState('');
const [item,setItem] = useState([]);
const [mark , setMark] =  useState(false);
const [editdata, setEditData] = useState(null);
const[err,setErr] = useState("");




function addList(){
  if(input== 0) return;
  if(item.includes(input)){
   return setErr("this name is already Present");
}

if(editdata !== null){
  const updatedData = [...item];
  updatedData[editdata] = input
  setItem(updatedData)
  setEditData(null)
}
else{
    setItem([...item, input]);
    
}
setMark(true)
setInput("")
setErr("")
}



function editItem(index){
 setInput(item[index])
 setEditData(index)
}


function deleteItem(indexDelete){
const StoreDelete =  item.filter((_,index)=> index !== indexDelete);
setItem(StoreDelete);
}

return (
      <div className='bg-[hsl(240deg_32.8%_24.51%)] mt-5 max-w-[800px] border border-[#c3c2c2] m-auto'>
      <div className='flex justify-between p-5'>
      <input type="text" className='bg-white border-none outline-none w-[80%] p-2.5 rounded-[4px_0_0_4px]' value={input}  placeholder='Enter the task' onChange={(e)=>setInput(e.target.value)}/>
      <button className='text-white bg-black border-none font-bold w-37.5  rounded-[0px_4px_4px_0px] mx-auto cursor-pointer' onClick={()=>addList()} > {editdata !== null ? "Update Task": "Add"} </button>
      
    </div>
     <TodoItem   
     deleteItem={deleteItem} 
     mark={mark} 
     item={item}
     editItem={editItem} 
     setEditData={setEditData}
     />
    <span className='text-amber-700 flex justify-center p-1'>{err}</span>
    </div>
   
    
  )
}

export default Todolist
