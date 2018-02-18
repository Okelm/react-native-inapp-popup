import { Component, default as React, StatelessComponent } from 'react';
import { Animated, Dimensions, LayoutChangeEvent, StyleSheet } from 'react-native';

interface State {
  translateY: Animated.Value;
  childrenHeight: number;
}

interface Props {
  children?: JSX.Element | StatelessComponent;
  expanded: boolean;
}

export class TopPopup extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      translateY: new Animated.Value(0),
      childrenHeight: Dimensions.get('window').height,
    };
    this.setHeight = this.setHeight.bind(this);
  }

  animate(expanded: boolean) {
    Animated.spring(
      this.state.translateY,
      {
        toValue: expanded ? 1 : 0,
        friction: 10,
      }).start();
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.expanded !== this.props.expanded) {
      this.animate(nextProps.expanded);
    }
  }

  setHeight(event: LayoutChangeEvent): void {
    this.setState({childrenHeight: event.nativeEvent.layout.height});
  }

  render() {
    const children = this.props.children;
    const childrenHeight = this.state.childrenHeight;
    const { container, cardLike } = styles;
    const translateY = this.state.translateY.interpolate({
      inputRange: [0, 1],
      outputRange: [-childrenHeight, 0],
    });
    const style = [
      container,
      cardLike,
      {transform: [{ translateY }]},
    ];
    return (
      <Animated.View
        style={style}
        onLayout={this.setHeight}
      >
        {children}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  cardLike: {
    padding: 16,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 4,
  },
});
