import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'src/components';
import { Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';

import _ from 'lodash';
import moment from 'moment';

import styles from './styles';

export class DealItem extends Component {
  render() {
    const { user } = this.props;

    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Card style={styles.container}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: user.picture.thumbnail }} />
              <Body>
                <Text style={[styles.name]}>
                  {_.startCase([user.name.title, user.name.first, user.name.last].join(' '))}
                </Text>
                <Text note>{moment(user.registered).format('MMM DD, YYYY')}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}