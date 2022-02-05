import Carousel from "react-elastic-carousel";
import { Item } from "./Carousel.elements";
import "./carousel.css";

const breakPoints = [{ width: 1200, itemsToShow: 5, itemsToScroll: 5, pagination: false, itemPadding: [0,0,0,0]}];

function MyCarousel() {
    return(
        <>
            <Carousel breakPoints={breakPoints}>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/dune/ET00122526">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122526-nvybkaqagm-portrait.jpg" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/venom-let-there-be-carnage/ET00122532">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00133391-tkgsejqduu-portrait.jpg" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/irresistible/ET00301307">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-banwzudamg-portrait.jpg" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/fast-and-furious-9/ET00056556">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301307-pkynbthhfz-portrait.jpg" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/the-lost-leonardo/ET00314733">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00316211-vbezdftums-portrait.jpg" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/the-matrix-resurrections/ET00133391">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00319461-cllpgvksxu-portrait.jpg" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/dangerous-2022/ET00319461">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00056556-mppntlfyfm-portrait.jpg" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/shane/ET00318498">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00318498-yqznmzrbps-portrait.jpg" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/freaky/ET00301310">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00314735-aaecvxhtmd-portrait.jpg" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/separation/ET00321106">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00112730-mzhewtvhjz-portrait.jpg" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
            </Carousel>
        </>
    );
}

export default MyCarousel;