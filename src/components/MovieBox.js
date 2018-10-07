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
import { isEqual } from 'lodash'

class MovieBox extends React.Component {


  constructor(props) {
    super(props)
  }


  shouldComponentUpdate(nextProps, nextState) {
    if (isEqual(this.props.featureMovies, nextProps.featureMovies)) {
      return false
    }
    return true
  }

  render() {
    return (
      <View style={[styles.container, { marginRight: this.props.marginRight }]}>
        {
          this.props.loading
            ?
            <View style={{ flex: 1, height: 256, justifyContent: 'center', alignItems: 'center', backgroundColor: LOCATION_COLOR }}>
              <Loading />
            </View>
            :
            <Image source={{ uri: this.props.featureMovies.image }} style={{ flex: 1, height: 256 }} resizeMode='stretch' />
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



export default MovieBox