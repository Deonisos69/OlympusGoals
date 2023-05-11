import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import MotivationScreen from './components/screens/Motivation';
import GoalsScreen from './components/screens/Goals';
import MotivationSourcesScreen from './components/screens/MotivationSources';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Motivation" component={MotivationScreen} />
          <Tab.Screen name="Goals" component={GoalsScreen} />
          <Tab.Screen name="Motivation Sources" component={MotivationSourcesScreen} />
        </Tab.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
