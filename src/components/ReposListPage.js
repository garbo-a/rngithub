import React, { PureComponent } from 'react';
import { ActivityIndicator, View, FlatList } from 'react-native';

import s from '../styles';
import ListItem from './ListItem';
import ListHeader from '../containers/ListHeader';

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
      <View style={[s.flx1]}>
        <ListHeader/>
        {
          this.props.repositories.length ?
            <FlatList
              data={this.props.repositories}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              ItemSeparatorComponent={this._separatorComponent}
            /> :
            <View style={[s.flx1]}>
              <ActivityIndicator
                animating
                size={'large'}
                style={[s.flx1, s.itemsCenter, s.jcCenter]}
              />
            </View>
        }
      </View>
    );
  }
}
