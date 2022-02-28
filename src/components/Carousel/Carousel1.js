import Carousel from "react-elastic-carousel";
import { Item } from "./Carousel.elements";
import "./style/carousel.css";

const breakPoints = [{ width: 500, itemsToShow: 3, itemsToScroll: 3, pagination: false, itemPadding: [0,0,0,0]}, { width: 1200, itemsToShow: 5, itemsToScroll: 5, pagination: false, itemPadding: [0,0,0,0]}];

function MyCarousel() {
    return(
        <>
            <Carousel breakPoints={breakPoints}>
              <Item> 
                <a href="https://in.bookmyshow.com/explore/workshops-vita?referrerBase=">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/explore/health-and-fitness-vita?referrerBase=">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/explore/kids-vita?referrerBase=">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/explore/comedy-shows-vita?referrerBase=">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NDUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/explore/music-shows-vita?referrerBase=">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/music-shows-collection-202007220710.png" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/explore/e-sports-vita?referrerBase=">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/explore/upskill-vita?referrerBase=">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/explore/food-and-drinks-workshops-vita?referrerBase=">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/explore/gaming-vita?referrerBase=">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/interactive-games-collection-202012041129.png" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/explore/arts-and-crafts-workshops-vita?referrerBase=">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/art-and-crafts-collection-202007220710.png" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/explore/theatre-plays-vita?referrerBase=">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/theatre-shows-collection-202012041128.png" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
              <Item> 
                <a href="https://in.bookmyshow.com/explore/dance-workshops-vita?referrerBase=">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/dance-collection-01102020340.png" alt="" width="100%" height="100%" /> 
                </a>
              </Item>
            </Carousel>
        </>
    );
}

export default MyCarousel;