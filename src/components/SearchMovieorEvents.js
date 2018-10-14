import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import Loading from './Spinner'
import { WHITE, DEFAUL_TEXT_STYLE_BOLD, DEFAULT_TEXT_STYLE, SECONDARY_COLOR, TEXT_BLUE_COLOR } from '../style/style';
class MovieCardBox extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      width: null,
      height: null,
      loading: false
    }
  }
  componentDidMount() {
    Image.getSize(this.props.thumbnail, (x, y) => {
      this.setState({
        width: x,
        height: y
      })
    })
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          resizeMode='stretch'
          source={{ uri: this.props.thumbnail }}
          style={{ width: 90,height:128 ,marginRight:16}}
        />
        <View style={{flex:1}}>
          <Text style={[DEFAUL_TEXT_STYLE_BOLD]} numberOfLines={1}>{this.props.name}</Text>
          <Text style={[DEFAULT_TEXT_STYLE,{marginTop:16,color:TEXT_BLUE_COLOR}]}><Text style={[DEFAULT_TEXT_STYLE,{color:SECONDARY_COLOR}]}>Movie</Text> | {this.props.tags}</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
  }
})
export default MovieCardBox