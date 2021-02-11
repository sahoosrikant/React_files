import logo from './logo.svg';
import './App.css';
import {CalculateScore} from '../src/Component/CalculateScore'
function App() {
  return (
    <div>
      <CalculateScore Name={"Steeve"}
      School={"DNV Public School"}
      total = {400}
      goal={4}
      />
    </div>
  )
 
}

export default App;
