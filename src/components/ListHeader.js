import React, { PropTypes, Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import s from '../styles';

const textInputStyles = [s.flx1, s.selfStretch,
  s.h2, s.p0, s.mh2, s.mv1,
  s.center,
  s.borderHl, s.rounded1, s.borderGrayBorder,
  s.bgWhite];

export default class ListHeader extends Component {

  render() {

    return (
      <View style={[s.bgGrayLight]}>
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          style={textInputStyles}
          onChangeText={() => {}}
          onFocus={() => {}}
          onBlur={() => {}}
          underlineColorAndroid="transparent"
          placeholder={'Search'}
          placeholderTextColor={'#686868'}
          accessibilityLabel={'search'}
          maxLength={200}
          multiline={false}
        />
      </View>);
  }
};
