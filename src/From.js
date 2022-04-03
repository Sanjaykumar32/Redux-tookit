import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTransaction } from './features/TransactionReduser';

export default function From() {
    const [name , setName] = useState('');
    const [number , setNumber] = useState('');
    const [select , setSelect] =useState("");

  
    const id = nanoid()

    const dispatch = useDispatch()

  return (
    <div>
      <input type="text" 
       value={name}
       onChange={(e)=> setName(e.target.value)}
      />
      <select name="select"
      value={select}
      onChange={(e)=> setSelect(e.target.value)}
      
      >
          <option value="">select</option>
          <option value="credit">credit</option>
          <option value="debit">debit</option>
      </select>
      <input type="text"
      value={number}
      onChange={(e)=>setNumber(e.target.value)}

      />

      <button onClick={()=>{dispatch(addTransaction(
          {
              name ,  
              number,
              select,
              id,
          }
      ))}}>submit</button>
    </div>
  )
}
