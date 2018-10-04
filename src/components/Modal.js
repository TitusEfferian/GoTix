import React from 'react'
import {
    Modal,
    StyleSheet,
    View,
    ScrollView
} from 'react-native'
import { HEIGHT, WHITE } from '../style/style';

const ModalPop = (props) => {
    const { animationType, transparent, visible, style } = props
    return (
        <Modal
            animationType={animationType}
            transparent={transparent}
            visible={visible}
        >
            <View style={[styles.modalContainer,{paddingBottom:0}]}>
                {props.children}
            </View>
        </Modal>

    )
}
const styles = StyleSheet.create({
    modalContainer: {
        marginTop: HEIGHT * 0.2,
        padding: 16,
        borderRadius: 8,
        backgroundColor: WHITE,
        flex:1
    }
})

export default ModalPop