/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import InshortsTabs from './components/InshortsTabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DiscoverScreen from './Screens/DiscoverScreen';
import NewsScreen from './Screens/NewsScreen';
import NavBar from './Screens/NavBar';
import linking from './Screens/Linking';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    Stack = createNativeStackNavigator();
    return (
      <NavigationContainer linking={linking}>
        <NavBar></NavBar>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="News" component={NewsScreen} />
          <Stack.Screen name="Discover" component={DiscoverScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: hp(3),
  },
  onTouched: {
    borderBottomWidth: 3,
    borderBottomColor: 'red',
  },
  onNotTouched: {},
});

export default App;
