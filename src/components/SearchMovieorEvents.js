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
  
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          resizeMode='stretch'
          source={{ uri: this.props.thumbnail }}
          style={{ width: this.props.type == 'Movies' ? 90 :90 ,height:this.props.type=='Movies' ? 128 : 49 ,marginRight:16}}
        />
        <View style={{flex:1}}>
          <Text style={[DEFAUL_TEXT_STYLE_BOLD]} numberOfLines={1}>{this.props.name}</Text>
          <Text style={[DEFAULT_TEXT_STYLE,{marginTop:16,color:TEXT_BLUE_COLOR}]}><Text style={[DEFAULT_TEXT_STYLE,{color:SECONDARY_COLOR}]}>{this.props.type}</Text> | {this.props.tags}</Text>
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