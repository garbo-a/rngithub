import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from 'react-native';

import s from '../styles';
import ListItem from './ListItem';

const rowStyle = [s.flxRow];
const textStyle = [s.bold, s.gray];

export default class DetailRepoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: props.data,
    });
  }

  _keyExtractor = (item, index) => item.id;

  _onPressItem = () => {};

  _renderItem = ({ item }) => (
    <ListItem
      id={item.id}
      onPressItem={this._onPressItem}
      data={item}
      pulls
    />
  );

  _separatorComponent = () =>
    <View
      style={[s.ml2, s.bgGray, { height: 0.5 }]}
    />;

  render() {
    return (
      <View style={[s.flx1, s.itemsStart, s.jcStart]}>
        <View style={[s.bgGrayLight, s.ph2, s.pb1, { width: '100%', paddingTop: 75 }]}>
          <View style={rowStyle}>
            <Text style={[s.gray]}>Name: </Text>
            <Text style={textStyle}>{this.state.data.full_name}</Text>
          </View>
          <View style={rowStyle}>
            <Text style={[s.gray]}>Stars: </Text>
            <Text style={textStyle}>{this.state.data.stargazers_count}</Text>
          </View>
          <View style={rowStyle}>
            <Text style={[s.gray]}>Watchers: </Text>
            <Text style={textStyle}>{this.state.data.watchers_count}</Text>
          </View>
          <View style={rowStyle}>
            <Text style={[s.gray]}>Open Issues: </Text>
            <Text style={textStyle}>{this.state.data.open_issues_count}</Text>
          </View>
          <View/>
        </View>
        {
          this.props.pulls.length ?
            <FlatList
              data={this.props.pulls}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              ItemSeparatorComponent={this._separatorComponent}
            /> :
            <ActivityIndicator
              animating
              size={'large'}
              style={[s.flx1, s.itemsCenter, s.jcCenter, s.selfStretch]}
            />
        }
      </View>
    )
  }
}
