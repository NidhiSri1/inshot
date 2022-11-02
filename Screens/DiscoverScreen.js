import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {Component} from 'react';
import {categories} from '../API/api';
import {FlatList} from 'react-native-gesture-handler';
import {sources} from '../API/api';

export default class DiscoverScreen extends Component {
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.categories}
        onPress={() =>
          this.props.navigation.navigate('News', {name: item.name})
        }>
        <Image source={{uri: item.pic}} style={styles.image}></Image>
        <Text style={{alignSelf: 'center'}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View>
        <Text>Categories</Text>
        <FlatList
          data={categories}
          renderItem={this.renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}></FlatList>
        <Text> Sources</Text>
        <View style={styles.sources}>
          {sources.map(item => (
            <TouchableOpacity
              style={styles.sourceContainer}
              onPress={() => {
                this.props.navigation.navigate('News', {name: item.id});
              }}>
              <Image
                source={{uri: item.pic}}
                style={styles.sourcezImage}></Image>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categories: {
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: 80,
    height: 70,
    resizeMode: 'contain',
  },
  sourcezImage: {
    height: '100%',
    borderRadius: 20,
    resizeMode: 'contain',
  },
  sources: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 110,
    width: '30%',
    borderRadius: 10,
    margin: 15,
  },
});
