import React, { useState } from 'react'


function Todolist() {
  const [input, setInput] = useState('');
  const [item,setItem] = useState([]);
  console.log(input)
function addList(){
    //console.log(e.target.value);
    //const getValue = input;
   // console.log(getValue)
    setItem([item, input]);
    setInput("")
}
return (
    <div>
    <div className='todoitem'>
      <input type="text" value={input} placeholder='Enter the task' onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={()=>addList()} >Add</button>

    </div>
        <h1>{console.log(item)}
          {item.map((items, index) => {
            return (
              <h1 key={index}>{items}</h1>
            );
          })}
    </h1>
    </div>
   
  )
}

export default Todolist;
