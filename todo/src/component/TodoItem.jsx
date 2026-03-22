import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import './layout.css'
function TodoItem({item,deleteItem,editItem,toggleMarkTask}) {
//console.log(toggleMarkTask ,"check")
  return (
    <div className='m:w-[764px] w-[100%]  overflow-auto max-h-[calc(78vh-80px)] mx-auto px-2.5'>
      <ul>
      {item.map((items, index) => {
        {console.log(items)}
        return (
            <li  className='justify-between p-2.5 mb-2.5 items-center text-white flex border border-[#717171] list-none rounded-[8px] 
             bg-[hsl(241.88deg_21.33%_29.41%)]'
             key={index}>

             <div className='flex align-center'> 
              <span  onClick={() => toggleMarkTask(index)}  className={`flex cursor-pointer ${items.completed?'line-through':""}`} >
               {items.completed ? <span className='text-green-500 relative top-1.5 mr-1.5'><MdOutlineDone /></span> : ""}
               {items.text}
             </span>
             </div>
             <span className='flex'>
            <button className='text-[#ef4444] cursor-pointer text-[20px]' onClick={()=>deleteItem(index)}> <MdDelete/></button> 
            <span className='text-[#ef4444] cursor-pointer text-[20px] mx-2.5' onClick={()=>editItem(index)} ><RxUpdate /></span>
          
             </span> 
             </li>
            
             );
             
          })}
      </ul>
    </div>
   
  )
}
export default TodoItem;
