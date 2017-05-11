import React, { Component } from 'react';
import { View, Text } from 'react-native';
import s from '../styles';

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

  render() {
    return (
      <View style={[s.mt4, s.flx1, s.itemsStart, s.jcStart, s.m2, s.pv1]}>
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
      </View>
    )
  }
}