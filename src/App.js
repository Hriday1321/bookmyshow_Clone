import logo from './components/media/bookmyshow.png';
import { NavDiv, NavInp, NavBut } from './components/Home.elements';

function App() {
  return (
    <div className="App">
      <NavDiv> 
        <img src={logo} />
        <NavInp/>
        <NavBut>Sign In</NavBut>
      </NavDiv>
    </div>
  );
}

export default App;
