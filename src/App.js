import './App.css';
import { useState } from 'react';
import { Typography, makeStyles, Box } from '@material-ui/core';

//Components Import
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';



const useStyle = makeStyles({
  header:{
    color: 'blue',
    fontSize: 35,
    margin: '10px 0',
    textTransform: 'uppercase',
    padding: 10,
    fontFamily: [
      '"Apple Color Emoji"'
    ],
  
  },
  component: {
    background: '#FFF',
    width: 800,
    padding: 10,
    borderRadius: 20,
    display: 'flex',
    '& > *': {
      width: '50%',
      padding: 10,
      height: '70vh'
    }
  }
})
function App() {
  const classes = useStyle()

const [transactions, setTransactions] = useState([
  { id: 1, text: 'Dominos', amount: -100},
  { id: 2, text: 'Salary', amount: 5000},
  { id: 3, text: 'Books',  amount: -100},
  { id: 4, text: 'Bonus', amount: 3000},
])
const  deleteTransaction = (id) => { 
  setTransactions(transactions.filter(transaction => transaction.id 
    !== id))
}

const addTransaction = (transaction) => {
  console.log(transaction);
  setTransactions(transactions => [transaction, ...transactions]);
}
  return (
    <div className="App">
     <Typography className={classes.header}>Expense Tracker</Typography>
     <Box className={classes.component}>
       <Box>
       <Balance transactions={transactions}/>
       <ExpenseCard transactions={transactions}/>
       <NewTransaction addTransaction={addTransaction}/>
       </Box>
       <Box>
       <Transactions transactions={transactions}  deleteTransaction={deleteTransaction}/>
       </Box>
     </Box>
    </div>
  );
}

export default App;
