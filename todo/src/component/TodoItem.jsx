import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
function TodoItem({item,deleteItem,mark}) {
  console.log(item,deleteItem,mark)
return (
    <div>
      {item.map((items, index) => {
            return (
             <ul key={index}>
              <li >{items} <button onClick={()=>deleteItem(index)}> <MdDelete/></button> <span>{ mark ? <MdOutlineDone />: ""}</span> </li>
             </ul>
            );
          })}

    </div>
   
  )
}
export default TodoItem;
