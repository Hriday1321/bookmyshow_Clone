import Carousel from "react-elastic-carousel";
import { Item } from "./Carousel.elements";
import "./style/carousel.css";

const breakPoints = [{ width: 500, itemsToShow: 3, itemsToScroll: 3, pagination: false, itemPadding: [0,0,0,0]},{ width: 1200, itemsToShow: 5, itemsToScroll: 5, pagination: false, itemPadding: [0,0,0,0]}];

function MyCarousel() {
    return(
        <>
            <Carousel breakPoints={breakPoints}>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/dune/ET00122526">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122526-nvybkaqagm-portrait.jpg" alt="Dune" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/the-matrix-resurrections/ET00133391">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00133391-tkgsejqduu-portrait.jpg" alt="Matrix Resurrections" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/venom-let-there-be-carnage/ET00122532">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-banwzudamg-portrait.jpg" alt="Venom 2" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/irresistible/ET00301307">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301307-pkynbthhfz-portrait.jpg" alt="Irresistible" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/surat/movies/the-witnesses/ET00316211">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00316211-vbezdftums-portrait.jpg" alt="The Witnesses" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/test/movies/dangerous-2022/ET00319461">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00319461-cllpgvksxu-portrait.jpg" alt="Dangerous" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/movies/fast-and-furious-9/ET00056556">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00056556-mppntlfyfm-portrait.jpg" alt="Fast 9" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/vita/movies/shane/ET00318498">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00318498-yqznmzrbps-portrait.jpg" alt="Shane" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/movies/never-back-down-revolt/ET00314735">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00314735-aaecvxhtmd-portrait.jpg" alt="Never Back Down Revolt" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/margherita/movies/the-last-full-measure/ET00112730">
                    <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00112730-mzhewtvhjz-portrait.jpg" alt="Last Full Measure" width="100%" height="100%" /> 
                </a>
              </Item>
            </Carousel>
        </>
    );
}

export default MyCarousel;