import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import './layout.css'
function TodoItem({item,deleteItem,mark,editItem}) {
 
  return (
    <div className='w-[764px] overflow-auto max-h-[calc(78vh-80px)] mx-auto'>
      <ul>
      {item.map((items, index) => {
        return (
              
             <li  className='justify-between p-2.5 mb-2.5 items-center text-white flex border border-[#717171] list-none rounded-[8px] 
             bg-[hsl(241.88deg_21.33%_29.41%)]'
             key={index}>
             <div className='flex align-center'> {items.charAt(0).toUpperCase()+items.slice(1)} <span className='text-[#22c55e] text-[20px] relative mx-0.5 top-0.5'>{ mark ? <MdOutlineDone />: ""}</span></div>
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
