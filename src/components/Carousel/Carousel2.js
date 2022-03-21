import Carousel from "react-elastic-carousel";
import { Item } from "./Carousel.elements";
import "./style/carousel.css";

const breakPoints = [{ width: 500, itemsToShow: 3, itemsToScroll: 3, pagination: false, itemPadding: [0,0,0,0]},{ width: 1200, itemsToShow: 5, itemsToScroll: 5, pagination: false, itemPadding: [0,0,0,0]}];

function MyCarousel(props) {
    return(
        <>
            <Carousel breakPoints={breakPoints}>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/irresistible/ET00301307">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301307-pkynbthhfz-portrait.jpg" alt="Irresistible" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/shane/ET00318498">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00318498-yqznmzrbps-portrait.jpg" alt="Shane" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/irresistible/ET00301307">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301307-pkynbthhfz-portrait.jpg" alt="Irresistible" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/shane/ET00318498">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00318498-yqznmzrbps-portrait.jpg" alt="Shane" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/irresistible/ET00301307">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301307-pkynbthhfz-portrait.jpg" alt="Irresistible" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/shane/ET00318498">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00318498-yqznmzrbps-portrait.jpg" alt="Shane" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/irresistible/ET00301307">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301307-pkynbthhfz-portrait.jpg" alt="Irresistible" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/shane/ET00318498">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00318498-yqznmzrbps-portrait.jpg" alt="Shane" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/irresistible/ET00301307">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301307-pkynbthhfz-portrait.jpg" alt="Irresistible" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/shane/ET00318498">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00318498-yqznmzrbps-portrait.jpg" alt="Shane" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/irresistible/ET00301307">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301307-pkynbthhfz-portrait.jpg" alt="Irresistible" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/shane/ET00318498">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00318498-yqznmzrbps-portrait.jpg" alt="Shane" width="100%" height="100%" /> 
                </a>
              </Item>
            </Carousel>
        </>
    );
}

export default MyCarousel;