import React, { useEffect, useState } from 'react';
import Moneytrans from './Components/Moneytrans'
import Balance from './Components/Balance';
function App() {

  const [translist, setTranslist] = useState([]);
  const [balance, setBalance] = useState('');
  const [income, setIncome] = useState('');
  const [expense, setExp] = useState('');




  //useeffect hook to addup the amount using reduce
  useEffect(() => {
    const income = translist.reduce((acc, curr) => {
      return curr.amount > 0 ? acc + curr.amount : acc;
    }, 0);

    const expense = translist.reduce((acc, curr) => {
      return  curr.amount < 0 ? acc + curr.amount : acc;
    }, 0);

    setBalance(income + expense);
    setExp(expense);
    setIncome(income);
  }, [translist]); // when there will be some changes in the translist array then the useeffect will fire
 
  //delete items from list
  function deletelistitems(id){
    setTranslist(translist => {
      return translist.filter((item) => item.id !== id)
    })
  }


  //add items in list
  function balanceadder(tr) {
    // let newtr = {tr : parseFloat(tr)}
    setTranslist(translist => [...translist, tr]);
  }

  return (
    <>
      <div className='flex items-center justify-center font-Poppins flex-col w-1/3 m-auto'>
        <h1 className='text-4xl font-bold mb-7 '>Expense Tracker</h1>
        <Balance income={income} expense={expense} balance={balance} />
        <Moneytrans  deletelistitems={deletelistitems} translist={translist} balanceadder={balanceadder} />
      </div>
    </>
  );
}

export default App;
