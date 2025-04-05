import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';

function Carousel({ children }) {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={25}
            totalSlides={children.length}
            dragEnabled={false}
            infinite={true}
        >
            <Slider>
                {React.Children.map(children, (child, index) => (
                    <Slide index={index}>
                        {child}
                    </Slide>
                ))}
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
            <DotGroup />
        </CarouselProvider>
    );
}

export default Carousel;
