import logo from './components/media/bookmyshow.png';
import { NavDiv, NavSubDiv, NavInp, NavBut, NavSubBut } from './components/Home.elements';

function App() {
  return (
    <div className="App">
      <NavDiv> 
        <img src={logo} alt="logo" />
        <NavInp/>
        <NavBut>Sign In</NavBut>
      </NavDiv>
      <NavSubDiv>
        <NavSubBut>Movies</NavSubBut>
        <NavSubBut>Stream</NavSubBut>
        <NavSubBut>Events</NavSubBut>
        <NavSubBut>Plays</NavSubBut>
        <NavSubBut>Sports</NavSubBut>
        <NavSubBut>Activities</NavSubBut>
        <NavSubBut>Buzz</NavSubBut>
      </NavSubDiv>
    </div>
  );
}

export default App;
