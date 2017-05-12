import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import s from '../styles';

const textInputStyles = [s.flx1, s.selfStretch,
  s.h2, s.p0, s.mh2, s.mv1,
  s.center,
  s.borderHl, s.rounded1, s.borderGrayBorder,
  s.bgWhite];

export default class ListHeader extends Component {
  constructor(props) {
    super(props);
    this.onSearchRepos = this.props.onSearchRepos;
  }

  _onChangeText(t) {
    if (t.length) {
      this.onSearchRepos(t);
    } else {
      this.onSearchRepos('stars:>1');
    }
  }

  render() {
    return (
      <View style={[s.bgGrayLight, s.mt4, s.h3]}>
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          style={textInputStyles}
          onChangeText={(t) => this._onChangeText(t)}
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
