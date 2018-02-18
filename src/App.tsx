import React, { Component } from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  View
} from 'react-native';
import { ExampleContent } from './ExampleContent';
import { TopPopup } from './TopPopup';


interface State {
  showPopup: boolean,
}

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }
  render() {
    const showPopup = this.state.showPopup;
    const { container, instruction } = styles;
    return (
      <View style={container}>
        <TopPopup
          expanded={showPopup}>
          <ExampleContent/>
        </TopPopup>
        <Text style={instruction}>
         Click the toggle below to change current state of popup:
        </Text>
        <Switch
          onValueChange={(isTurnedOn) => this.setState({showPopup: isTurnedOn})}
          value={showPopup}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instruction: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
