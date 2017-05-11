import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Map } from 'immutable';


import s from '../styles';
import ListItem from './ListItem';
import ListHeader from './ListHeader';

export default class ReposListPage extends PureComponent {
  constructor(props) {
    super(props);
    this.onDetailRepoPage = this.props.onDetailRepoPage;
  }
  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {
    this.onDetailRepoPage(id);
  };

  _renderItem = ({ item }) => (
    <ListItem
      id={item.id}
      onPressItem={this._onPressItem}
      data={item}
    />
  );

  _separatorComponent = () =>
    <View
      style={[s.ml2, s.bgGray, { height: 0.5 }]}
    />;


  render() {
    return (
      <FlatList
        data={this.props.repositories}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        style={[s.mt4]}
        ItemSeparatorComponent={this._separatorComponent}
        ListHeaderComponent={ListHeader}
      />
    );
  }
}


