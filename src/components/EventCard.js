import React from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'
import { LOCATION_COLOR, WIDTH } from '../style/style';
import Loading from './Spinner';

class EventCard extends React.PureComponent {
    render() {
        return (
            <View style={[styles.mainContainer]}>
                {
                    this.props.loading
                        ?
                        <View style={{ flex: 1, height: 208, justifyContent: 'center', alignItems: 'center', backgroundColor: LOCATION_COLOR }}>
                            <Loading />
                        </View>
                        :
                        <Image style={styles.imageStyle} source={{ uri: this.props.image }} resizeMode='stretch' />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        width:WIDTH-16,
        height: 208,
        borderRadius: 8,
        overflow: 'hidden',
        margin:8
    },
    imageStyle: {
        flex: 1,
    }
})

export default EventCard