import React, { PropTypes } from 'react';
import { Dimensions, TouchableOpacity, Text, View } from 'react-native';
import s from '../styles';

const { width } = Dimensions.get('window');
const rowStyle = [s.flx1, s.flxRow];
const rowStyle2 = [s.flx1, s.flxRow, s.itemsStart];
const textStyle = [s.bold, s.gray, s.flx3];
const textStyle2 = [s.gray, s.flx1];

const Item = ({ onPress, data, pulls }) => {
  return (
    <View>
    {
      pulls ?
        <View style={[{ width: width }, s.p1, s.pl2]}>
          <View style={rowStyle2}>
            <Text style={textStyle2}>Author: </Text>
            <Text
              style={textStyle}
              ellipsizeMode={'tail'}
            >{data.user.login}</Text>
          </View>
          <View style={rowStyle2}>
            <Text style={textStyle2}>Name: </Text>
            <Text
              style={textStyle}
              ellipsizeMode={'tail'}
            >{data.title}</Text>
          </View>
          <View style={rowStyle2}>
            <Text style={textStyle2}>Number: </Text>
            <Text style={textStyle}>{data.number}</Text>
          </View>
          <View style={rowStyle2}>
            <Text style={textStyle2}>Status: </Text>
            <Text style={textStyle}>{data.state}</Text>
          </View>
        </View> :
        <TouchableOpacity
          accessibile
          style={[s.m1, s.ml2,]}
          accessibilityLabel={data.full_name}
          onPress={onPress}
          testID={`${data.id}`}
        >
          <View>
            <View>
              <View style={rowStyle}>
                <Text style={textStyle2}>Name: </Text>
                <Text style={textStyle}>{data.full_name}</Text>
              </View>
              <View style={rowStyle}>
                <Text style={textStyle2}>Stars: </Text>
                <Text style={textStyle}>{data.stargazers_count}</Text>
              </View>
              <View style={rowStyle}>
                <Text style={textStyle2}>Watchers: </Text>
                <Text style={textStyle}>{data.watchers_count}</Text>
              </View>
              <View style={rowStyle}>
                <Text style={textStyle2}>Open Issues: </Text>
                <Text style={textStyle}>{data.open_issues_count}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
    }
    </View>
  );
};

Item.propTypes = {
  data: PropTypes.any,
  onPress: PropTypes.func,
  pulls: PropTypes.bool,
};

Item.defaultProps = {
  onPress: Function.prototype,
  pulls: false,
  style: [],
};

export default Item;
