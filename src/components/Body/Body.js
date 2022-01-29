import MyCarousel from "./../Carousel/MyCarousel";
import { Img, AlignedDiv, Text } from './Body.elements';

function Body() {
    return(
        <>
          <Img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png" alt="#" />
          <AlignedDiv>
            <Text>The Best of Entertainment</Text>
          </AlignedDiv>
          <AlignedDiv>
            <MyCarousel />
          </AlignedDiv>        
        </>
    );
}

export default Body;