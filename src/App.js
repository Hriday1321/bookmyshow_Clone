import Nav from './components/Nav/Nav';
import Carousel from "react-elastic-carousel";
import { Img, AlignedDiv, Text, Item } from './components/Body.elements';


const breakPoints = [{ width: 1200, itemsToShow: 5, itemsToScroll: 5, pagination: false, itemPadding: [0,0,0,0], showArrows: false }];

function App() {
  return (
    <div className="App">
      <Nav />
      
      <Img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png" alt="#" />
      <AlignedDiv>
        <Text>The Best of Entertainment</Text>
      </AlignedDiv>
      <AlignedDiv>
        <Carousel breakPoints={breakPoints}>
          <Item> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png" alt="" width="100%" height="100%" /> </Item>
          <Item> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png" alt="" width="100%" height="100%" /> </Item>
          <Item> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png" alt="" width="100%" height="100%" /> </Item>
          <Item> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png" alt="" width="100%" height="100%" /> </Item>
          <Item> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png" alt="" width="100%" height="100%" /> </Item>
          <Item> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png" alt="" width="100%" height="100%" /> </Item>
          <Item> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png" alt="" width="100%" height="100%" /> </Item>
          <Item> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png" alt="" width="100%" height="100%" /> </Item>
          <Item> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png" alt="" width="100%" height="100%" /> </Item>
          <Item> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png" alt="" width="100%" height="100%" /> </Item>
          <Item> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png" alt="" width="100%" height="100%" /> </Item>
          <Item> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png" alt="" width="100%" height="100%" /> </Item>
        </Carousel>
      </AlignedDiv>
    </div>
  );
}

export default App;
