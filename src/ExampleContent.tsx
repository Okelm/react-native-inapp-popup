import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Props {}

const ExampleContent: React.SFC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>
        Some text here
      </Text>
      <Text>
        More text
      </Text>
      <Text>
        I might have put there something more interesting but its only yet another Text
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { ExampleContent };
