import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// components
import MotivationButton from './components/MotivationButton';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <MotivationButton></MotivationButton>
        <Navbar></Navbar>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
