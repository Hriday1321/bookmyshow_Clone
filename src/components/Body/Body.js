import MyCarousel from "./../Carousel/MyCarousel";
import { Img, AlignedDiv, Text, AltDiv, AltText } from './Body.elements';

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
          <AltDiv>
            <img width="100%" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="#" />
            <AltText>
              <p>Premieres</p>
              <p>See more</p>
            </AltText>
          </AltDiv>
        </>
    );
}

export default Body;