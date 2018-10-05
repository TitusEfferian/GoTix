import React from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'
import { WIDTH, PRIMARY_COLOR, WHITE, LOCATION_COLOR } from '../style/style'
import { connect } from 'react-redux'
import { requestFeatureMovies } from '../redux/actions/featureMovies';
import Loading from './Spinner';
import {isEqual} from 'lodash'

class MovieBox extends React.Component {


    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.featureMoviesRequest('jakarta')
    }

    shouldComponentUpdate(nextProps,nextState){
        if(isEqual(this.props.featureMovies.data,nextProps.featureMovies.data)){
            return false
        }
        return true
    }


    render() {
        console.log(this.props.featureMovies)
        return (
            <View style={styles.container}>
                {
                    this.props.featureMovies.data == undefined
                        ?
                        <View style={{ flex: 1,height:256, justifyContent: 'center', alignItems: 'center',backgroundColor:LOCATION_COLOR }}>
                            <Loading />
                        </View>
                        :
                        <View>
                            <Image source={{ uri: this.props.featureMovies.data.data[this.props.arrayNumber].image }} style={{ flex: 1, height: 256 }} resizeMode='stretch' />
                            <View style={{ flex: 1, backgroundColor: 'white' }}>
                            </View>
                        </View>

                }
            </View>
        )

    }
}



const styles = StyleSheet.create({
    container: {
        width: (WIDTH / 2) - 16,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',

    }

})

const mapStateToProps = (state) => {
    return {
        featureMovies: state.featureMovies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        featureMoviesRequest: (location) => { dispatch(requestFeatureMovies(location)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieBox)