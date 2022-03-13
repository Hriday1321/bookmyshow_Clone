import React, { useState, useEffect } from 'react';
import Nav from './components/Nav/Nav';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import fetch from 'node-fetch';

function App() { 
  
	const [movies, setMovies] = useState([]); 
	
	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?apikey=298f6e5e&s=batman`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};
	
	useEffect(() => {
		getMovieRequest();
	}, []);
  
  return (
    <div className="App">
      <Nav />
      <Body movies={movies}/>
      <Body movies={movies}/>
      <Footer />
    </div>
  );
}

export default App;
