import React from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { requestSearch } from '../redux/actions/search'
import { MAIN_CONTAINER, SECONDARY_COLOR } from '../style/style';
import Icon from 'react-native-vector-icons/Ionicons'
import {isEqual} from 'lodash'
class Search extends React.PureComponent {
  static navigationOptions = {
    header: null
  }
  constructor(props){
    super(props)
    this.state={
      inputText:null
    }
  }

  

  render() {
    console.log(this.props.search)
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={{
            backgroundColor: SECONDARY_COLOR,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            paddingLeft: 8,
            marginTop: Platform.OS == 'ios' ? 24 : 0
          }}>
            <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
              <Icon style={{ marginRight: 16 }} name={Platform.OS == 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} color={'white'} size={24} />
            </TouchableOpacity>
            <TextInput
              style={{ flex: 1, padding: 8,backgroundColor:'white',borderRadius:8,marginRight:8 }}
              placeholder={'Search Movies or Events'}
              onChangeText={(text)=>{this.setState({inputText:text}),this.props.searchRequest(text)}}
              value={this.state.text}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    ...MAIN_CONTAINER
  },
  textInputContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8
  }
})

function mapStateToProps(state) {
  return {
    search: state.search
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchRequest: (search) => { dispatch(requestSearch(search)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)