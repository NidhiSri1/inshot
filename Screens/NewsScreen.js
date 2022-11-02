import axios from 'axios';
import React, {Component} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import Cards from './Card';
import {getNewsAPI, getSourceAPI} from '../API/api';

let listItem;
export default class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      index: 0,
      data: '',
      data: 1,
    };
  }
  async componentDidMount() {
    try {
      const data = await axios.get(getNewsAPI('general'));
      this.setState({apiData: data.data.articles});
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidUpdate(pp) {
    if (
      (this.props.route.params?.name != pp.route.params?.name &&
        this.props.route.params != undefined &&
        this.props.route.params?.id != 'bcc-news',
      this.props.route.params?.id != 'cnn',
      this.props.route.params?.id != 'fox-news',
      this.props.route.params?.id != 'google-news')
    ) {
      try {
        const data = await axios.get(getNewsAPI(this.props.route.params?.name));
        this.setState({apiData: data.data.articles});
      } catch (err) {
        console.log(err);
      }
    }
  }

  async componentDidUpdate(pp) {
    console.log(
      'nib',
      this.props.route.params?.id != pp.route.params?.name,
      this.props.route.params != undefined,
    );
    if (
      this.props.route.params?.id != pp.route.params?.name &&
      this.props.route.params != undefined
    ) {
      console.log('freaking', `${this.props.route.params?.name}`);
      try {
        const data = await axios.get(getNewsAPI(this.props.route.params?.name));
        console.log('datas', data);
        this.setState({apiData: data.data.articles});
      } catch (err) {
        console.log(err);
      }
    
    }
  }

  renderItem = ({item}) => {
    return <Cards item={item}></Cards>;
  };
  render() {
    console.log('sri', this.state.data, this.props);
    return (
      <View>
        {this.state.apiData && (
          <FlatList
            data={this.state.apiData}
            renderItem={this.renderItem}
            keyExtractor={item => item.title}
            ref={ref => {
              listItem = ref;
            }}
          />
        )}

        {/* <Cards></Cards> */}
      </View>
    );
  }
}
