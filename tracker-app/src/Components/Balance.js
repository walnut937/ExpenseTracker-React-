import React from 'react'

function Balance({ balance, income, expense }) {
  return (
    <>
    <div className='mr-auto mb-5'>
        <h1 className='text-lg font-medium'>Your Balance</h1>
        <h1 className='text-3xl'>${balance}</h1>
    </div>
    <div className='flex p-4 rounded-md shadow-md mb-7'>
        <div className='flex p-4 flex-col items-center border-r-[1px] border-black'>
            <h1 className='text-lg'>Income</h1>
            <h1 className='text-xl text-green-500'>${income}</h1>
        </div>
        <div className='flex p-4 flex-col items-center border-l-[1px] border-black'>
            <h1 className='text-lg'>Expense</h1>
            <h1 className='text-xl text-red-500'>${expense}</h1>
        </div>
    </div>
    </>
  )
}

export default Balance