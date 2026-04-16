
import './App.css'
import { Ticket } from './ticket'
import Lottery from './Lottery';

function App() {
  

  return (
    <>
    <p>Sum =15 you will win </p>
     <Lottery n={3} winningSum={15}/>
    </>
  );
}

export default App
