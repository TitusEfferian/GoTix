import React from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'

const EventCard = (props) => {
    return (
        <View style={styles.mainContainer}>
            <Image style={styles.imageStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        borderRadius: 8,
    },
    imageStyle:{
        flex:1,
        height:256,
    }
})

export default EventCard