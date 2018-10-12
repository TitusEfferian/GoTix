import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import {connect} from 'react-redux'
import { requestSearch } from '../redux/actions/search'
import { MAIN_CONTAINER } from '../style/style';

class Search extends React.PureComponent{
  static navigationOptions={
    title:'Search'
  }
  
  render(){
    console.log(this.props.search)
    return(
      <View style={styles.mainContainer}>
        
      </View>
    )
  }
}

const styles=StyleSheet.create({
  mainContainer:{
    ...MAIN_CONTAINER
  }
})

function mapStateToProps(state){
  return{
    search:state.search
  }
}

function mapDispatchToProps(dispatch){
  return{
    searchRequest:(search)=>{dispatch(requestSearch(search))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)