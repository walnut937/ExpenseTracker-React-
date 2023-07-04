import React from 'react'
import Trans from './Trans';
import Transactionadder from './Transactionadder';


function transaction({ balanceadder, translist, deletelistitems}) {
  return (
    <>
      <Transactionadder balanceadder={balanceadder} />
    <h1 className='mr-auto'>History</h1>
    <div className='mt-3 flex flex-col w-full gap-3 py-2 border-black border-t-[1px]'>
        {
            translist.map(trans => (
            <Trans deletelistitems={deletelistitems} key={trans.id} trans={trans}/> 
                
            ))
        }
    </div>
    </>
  )
}

export default transaction