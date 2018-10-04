import React from 'react'
import { } from 'react-native'
import Carousel from 'react-native-banner-carousel'
import { WIDTH } from '../style/style';

const Banner = (props) => {
    return (
        <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={WIDTH}
        >
            {props.children}
        </Carousel>
    )
}
export default Banner