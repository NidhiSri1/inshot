import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Linking,
} from 'react-native';
import React, {Component} from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenNews: true,
    };
  }
  data = ['Discover', 'Feed', 'Go Top'];

  renderNavBar = ({item}) => {
    console.log('sriidhi', item);
    return (
      <View style={styles.navStyle}>
        <TouchableOpacity
          style={{padding: 8}}
          onPress={() => {
            // {
            //   item === 'Feed'
            //     ? Linking.openURL('mychat://news')
            //     : Linking.openURL('mychat://discover');
            // }
            if (item === 'Feed') {
              Linking.openURL('mychat://news');
            } else if (item === 'Discover') {
              Linking.openURL('mychat://discover');
            } else {
              Linking.openURL('mychat://news');
            }
          }}>
          <Text style={{fontSize: 18}}>{item}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.data}
          renderItem={this.renderNavBar}
          horizontal={true}></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navStyle: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    marginRight: heightPercentageToDP(11.5),
  },
});
