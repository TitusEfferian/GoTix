import React from 'react'
import {View,StyleSheet} from 'react-native'

const SectionTitle = (props) =>{
    return(
        <View style={[styles.sectionContainer,props.style]}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    sectionContainer:{
        padding:8,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        flex:1,
        marginTop:16
    }
})

export default SectionTitle