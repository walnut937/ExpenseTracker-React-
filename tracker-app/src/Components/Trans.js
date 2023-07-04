import React from 'react'

function Trans({ trans, deletelistitems }) {
    // let bill = 0;
    // calc(trans.amount);
    function remove(id) {
        deletelistitems(id);
        // bill += trans.amount;
    }
  return (
      <>
    <div className={`bg-white relative shadow-lg p-2 w-full flex items-center justify-between border-r-[5px] ${ trans.amount < 0 ? 'border-red-500' :  'border-green-500'}`}>   
        <h1 onClick={() => remove(trans.id)} className='absolute hover:opacity-100 opacity-0 cursor-pointer -left-5'>❌</h1>
        <h1>{trans.name}</h1>
        <h1>${trans.amount}</h1>
    </div>  
    </>
  )
}

export default Trans