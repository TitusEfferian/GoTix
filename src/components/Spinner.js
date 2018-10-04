import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { WIDTH, SECONDARY_COLOR } from '../style/style'
// import Spinner from 'react-native-spinkit'


const Loading = () => {
    return (
        <ActivityIndicator color={SECONDARY_COLOR} size={'large'} />
    )

}

export default Loading