import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CanvasDraw from './src/CanvasDraw';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Demo</Text>
        <View style={{ borderWidth: 1 }}>
          <CanvasDraw />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
