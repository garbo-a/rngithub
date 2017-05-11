import React from 'react';
import Item from './Item';

export default class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.data);
  };

  render() {
    return (
      <Item
        {...this.props}
        onPress={this._onPress}
      />
    )
  }
}