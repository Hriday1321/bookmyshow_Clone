import React from "react";
import axios from "axios";
import Nav from './components/Nav/Nav';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

const baseURL = "https://www.omdbapi.com/?apikey=298f6e5e&s=batman";

function App() { 
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.Search);
    });
  }, []);
  
  return (
    <div className="App">
      <Nav />
      <Body movies={post}/>
      <Footer />
    </div>
  );
}

export default App;
