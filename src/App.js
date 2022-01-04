import logo from './components/media/bookmyshow.png';
import { NavDiv, NavInp } from './components/Home.elements';

function App() {
  return (
    <div className="App">
      <NavDiv> 
        <img src={logo} height='100%' />
        <NavInp/>
      </NavDiv>
    </div>
  );
}

export default App;
