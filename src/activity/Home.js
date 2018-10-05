import React from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';
import { MAIN_CONTAINER, WIDTH, HEIGHT, SECONDARY_COLOR } from '../style/style'
import Banner from '../components/Banner'
import TextInput from '../components/TextInput';
import Loading from '../components/Spinner';
import Location from '../components/Location';
import Modal from '../components/Modal';
import Text from '../components/Text'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { requestBanner } from '../redux/actions/banner';
import { requestLocation } from '../redux/actions/location';
import { requestShowTime } from '../redux/actions/showtime'
import SectionTitle from '../components/SectionTitle';
import MovieBox from '../components/MovieBox';
import LogoTitle from '../components/LogoHeader';

class Home extends React.Component {
  static navigationOptions = {
    headerTitle: <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', marginLeft: 8, justifyContent: Platform.OS === 'ios' ? 'center' : null }}>
      <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>GO </Text>
      <LogoTitle />
      <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}> TIX</Text>
    </View>
  }

  state = {
    modalVisible: false,
    location: null
  }
  componentDidMount() {
    this.props.bannerRequest()
    this.props.locationRequest()
    this.props.showtimeRequest('jakarta')
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderBanner(data, index) {
    return (
      <View key={index}>
        <Image style={{ width: WIDTH, height: 260 }} source={{ uri: data.image }} />
      </View>
    )
  }

  renderLocation(data, index) {

    return (
      <TouchableOpacity onPress={() => {
        this.setState({
          location: data
        }), this.setModalVisible(false),
          this.props.showtimeRequest(data)
      }} key={index}>
        <Text style={{ marginBottom: 8, fontSize: 20 }}>
          {data}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { banner, location, showtime } = this.props
    console.log(showtime)
    return (
      <ScrollView style={MAIN_CONTAINER}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ color: SECONDARY_COLOR, fontSize: 16 }}>
                Your Location
              </Text>
              <TouchableOpacity onPress={() => { this.setModalVisible(false) }}>
                <Icon name='md-close' color={SECONDARY_COLOR} size={24} />
              </TouchableOpacity>
            </View>

            <View style={{ height: 1, backgroundColor: 'gray', marginTop: 16 }}>

            </View>
            <ScrollView>
              {
                location.data != undefined
                  ?
                  location.data.data.cities.map((data, index) => this.renderLocation(data, index))
                  :
                  null
              }
            </ScrollView>

          </View>
        </Modal>
        {
          banner.data != undefined && !banner.data.isFetching
            ?
            <Banner>
              {
                banner.data.data.map((data, index) => this.renderBanner(data, index))
              }
            </Banner>
            :
            <View style={styles.bannerContainer}>
              <Loading />

            </View>
        }
        <TextInput />
        <TouchableOpacity
          onPress={
            () => {
              this.setModalVisible(true)
            }
          }
        >
          <Location>
            {this.state.location == null ? 'Choose Your Location' : this.state.location}
          </Location>
        </TouchableOpacity>
        <SectionTitle>
          <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>
            Movies
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: 'white', marginRight: 8 }}>
              View All
            </Text>
            <Icon name='ios-arrow-down' color={SECONDARY_COLOR} size={18} style={{ transform: [{ rotate: '-90deg' }] }} />
          </View>

        </SectionTitle>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 8 }}>
          <MovieBox />
          <MovieBox />

        </View>
      </ScrollView>

    )
  }
}

function mapStateToProps(state) {
  return {
    banner: state.banner,
    location: state.location,
    showtime: state.showtime
  }
}

function mapDispatchToProps(dispatch) {
  return {
    bannerRequest: () => { dispatch(requestBanner()) },
    locationRequest: () => { dispatch(requestLocation()) },
    showtimeRequest: (location) => { dispatch(requestShowTime(location)) }
  }
}
const styles = StyleSheet.create({
  bannerContainer: {
    width: WIDTH,
    height: 260,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)