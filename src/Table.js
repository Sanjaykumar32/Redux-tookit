import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTransaction } from './features/TransactionReduser'



export default function Table() {
    const list = useSelector(state=>state.Transaction)
    const dispatch = useDispatch()
    // console.log(list);

  return (
    <div>
      <table border="1" width="100%">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Expense</th>
                  <th>Amount</th>
              </tr>
          </thead>
          <tbody>
           {list.map(el=>{
             let id = el.id
              return( <tr key={el}>
                   <th>{el.name}</th>
                   <th>{el.select}</th>
                   <th>{el.number}</th>
                   <th>
                     <button onClick={()=>dispatch(deleteTransaction({id}))}>delete</button>
                   </th>
               </tr>)
           })}
          </tbody>
      </table>
    </div>
  )
}
