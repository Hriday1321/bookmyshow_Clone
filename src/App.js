import React from "react";
import axios from "axios";
import Nav from './components/Nav/Nav';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

function App() { 
  const [post, setPost] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('batman');

  React.useEffect(() => {
    const url = 'https://www.omdbapi.com/?apikey=298f6e5e&s=' + searchValue;
    axios.get(url).then((response) => {
      if (response.data.Search) {
			setPost(response.data.Search);
		}
    });
  }, [searchValue]);
  
  return (
    <div className="App">
      <Nav searchValue={searchValue} setSearchValue={setSearchValue} />
      <Body movies={post}/>
      <Footer />
    </div>
  );
}

export default App;
