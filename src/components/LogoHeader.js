import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { SECONDARY_COLOR } from '../style/style';

export default class LogoTitle extends React.Component {
    render() {
      return (
        
        <Icon
          name='ticket-alt'
          color={SECONDARY_COLOR}
          size={24}
        />
      );
    }
  }