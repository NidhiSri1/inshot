import React, {Component} from 'react';
import {Dimensions, Text, View, Linking, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Card, Title, Paragraph, Button} from 'react-native-paper';

export default class Cards extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={{marginBottom: '5%'}}>
        <Card>
          <Card.Cover source={{uri: `${this.props.item.urlToImage}`}} />
          <Card.Content>
            <Title numberOfLines={4}>{this.props.item.title}</Title>
            <Paragraph>{this.props.item.description}</Paragraph>
          </Card.Content>
          <TouchableOpacity
            style={{marginLeft: 14}}
            onPress={() => Linking.openURL(`${this.props.item.url}`)}>
            <Paragraph style={{color: 'blue', marginLeft: 2}}>
              View News...
            </Paragraph>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}
