import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Content } from 'native-base';
import Navigation from 'react-native-navigation';

import { Scene, Text } from 'src/components';

import { DealItem } from './components';
import styles from './styles';

class Deal extends Scene {
  constructor(props) {
    super(props);

    Navigation.setOptions(this.props.componentId, {
      topBar: {
        title: 'Deal History',
      }
    });

    this.state = {
      loading: false,
      refreshing: false,
      page: 0,

      users: []
    };
  }

  getUsers() {
    return fetch('https://randomuser.me/api/?results=10&page=' + this.state.page)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.results;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillMount() {
    this._handleLoadMore();
  }

  async loadData() {
    let users = await this.getUsers();

    this.setState({
      users: this.state.users.concat(users),
      loading: false,
      refreshing: false,
    });
  }

  _handleLoadMore = () => {
    this.setState({
      loading: true
    }, () => {
      this.loadData();
    });
  }

  _handleRefresh = () => {
    this.setState({
      users: [],
      refreshing: true
    }, () => {
      this.loadData();
    });
  }

  render() {
    const { loading, refreshing, users, page } = this.state;

    return (
      <View
        style={styles.container}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={users}
          style={styles.listContainer}
          keyExtractor={(item, index) => index}
          onRefresh={this._handleRefresh}
          refreshing={refreshing}
          onEndReached={this._handleLoadMore}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => (
            <DealItem
              user={item}
              onPress={() => alert(1)}
            />
          )}
          ListEmptyComponent={
            (!loading && page === 1) ? (<Text style={styles.emptyText}>No User Found!</Text>) : null
          }
          ListFooterComponent={
            !refreshing && (
              <View style={styles.listLoading}>
                <ActivityIndicator />
              </View>
            )
          }
        />
      </View>
    );
  }
}

export default Deal;