import React, { PropTypes } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import s from '../styles';

const rowStyle = [s.flx1, s.flxRow];
const textStyle = [s.bold, s.gray];

const Item = ({ onPress, data }) => {
  return (
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
            <Text style={[s.gray]}>Name: </Text>
            <Text style={textStyle}>{data.full_name}</Text>
          </View>
          <View style={rowStyle}>
            <Text style={[s.gray]}>Stars: </Text>
            <Text style={textStyle}>{data.stargazers_count}</Text>
          </View>
          <View style={rowStyle}>
            <Text style={[s.gray]}>Watchers: </Text>
            <Text style={textStyle}>{data.watchers_count}</Text>
          </View>
          <View style={rowStyle}>
            <Text style={[s.gray]}>Open Issues: </Text>
            <Text style={textStyle}>{data.open_issues_count}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

Item.propTypes = {
  onPress: PropTypes.func,
  data: PropTypes.any,
};

Item.defaultProps = {
  style: [],
  onPress: Function.prototype,
};

export default Item;
