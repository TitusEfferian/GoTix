import React from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'
import { LOCATION_COLOR, PRIMARY_TEXT_COLOR } from '../style/style';
import Icon from 'react-native-vector-icons/Ionicons'

const Location = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                {props.children}
            </Text>
            <Icon name='ios-arrow-down' size={16} color='white'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: LOCATION_COLOR,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    textStyle:{
        color:'white',
        fontSize:24
    }
})

export default Location