import Account from './components/Account';
import Bonus from './components/Bonus';
import './App.css';
import Info from './components/Info';
import { useSelector } from 'react-redux';

function App() {
  const state = useSelector((state) => state)

  return <main className='main'>
    <h1>Redux React</h1>
    <Info amount={state.accountS.amount} bonus={state.bonusS.points} />
    <Account amount={state.accountS.amount} />
    <Bonus bonus={state.bonusS.points} />
  </main>
}

export default App;
