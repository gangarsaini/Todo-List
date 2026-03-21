import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import './layout.css'
function TodoItem({item,deleteItem,mark}) {
  console.log(item,deleteItem,mark)
return (
    <div className='list-design'>
      <ul>
      {item.map((items, index) => {
        return (
             <li 
             key={index}>{items} 
             <span><button onClick={()=>deleteItem(index)}> <MdDelete/></button> 
             <span>{ mark ? <MdOutlineDone />: ""}</span></span> </li>
             );
             
          })}
      </ul>
    </div>
   
  )
}
export default TodoItem;
