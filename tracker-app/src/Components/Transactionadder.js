import React, { useState } from 'react'

function Transactionadder({ balanceadder }) {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    function values(e) {
        e.preventDefault();
        if(!name || !amount) return;
        const value = {name, amount, id: Date.now()}
        balanceadder(value);
        setName('');
        setAmount('');
    }

  return (
    <>
    <h1 className='mr-auto mb-2 mt-7'>Add Transaction</h1>
    <div className='flex flex-col py-3 border-t-[1px] border-black w-full'>
    <form className='flex flex-col gap-10' onSubmit={values}>
        <div>
            <h1>Text</h1>
            <input value={name} onChange={e => setName(e.target.value)} className='p-3 w-full outline-none bg-white shadow-lg ' type="text" placeholder='Enter Text' />
        </div>
        <div>
            <h1>Amount (- negative, + positive)</h1>
            <input value={amount} onChange={e => setAmount(Number(e.target.value))} className='p-3 w-full outline-none bg-white shadow-lg ' type="number" placeholder='Enter Amount' />
        </div>
    <button className='px-3 py-2 rounded-md bg-purple-400 text-white'>Add Transaction</button>
    </form>
    </div>
    </>
  )
}

export default Transactionadder