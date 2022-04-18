import Carousel from "react-elastic-carousel";
import { Item } from "./Carousel.elements";
import "./style/carousel.css";

const breakPoints = [{ width: 500, itemsToShow: 3, itemsToScroll: 3, pagination: false, itemPadding: [0,0,0,0]},{ width: 1200, itemsToShow: 5, itemsToScroll: 3, pagination: false, itemPadding: [0,0,0,0]}];

function MyCarousel(props) {
    return(
        <>
            <Carousel breakPoints={breakPoints}>
              {props.movies.map((movie, index) => (
        				<Item> 
                  <a href="https://in.bookmyshow.com/vita/movies/irresistible/ET00301307">
                    <img src={movie.Poster} alt={movie.Title} width="100%" height="300px" /> 
                  </a>
                </Item>
        			))}
            </Carousel>
        </>
    );
}

export default MyCarousel;