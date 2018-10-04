import React from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'
import { WIDTH } from '../style/style';

const MovieBox = (props) => {
    return (
        <View style={styles.container}>
            <Image source={{uri:'https://www.cgv.id/uploads/movie/pictures/18026700.jpg'}} style={{flex:1,height:256}} resizeMode='stretch'/>
            
           <View style={{flex:1,height:250,backgroundColor:'white'}}></View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: (WIDTH / 2) - 16,
        borderRadius:8,
        overflow:'hidden',
        position:'relative',
        backgroundColor:'red'
    }

})

export default MovieBox