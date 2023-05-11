import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons"

// screens
import MotivationScreen from './components/screens/Motivation';
import GoalsScreen from './components/screens/Goals';
import MotivationSourcesScreen from './components/screens/MotivationSources';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            switch (route.name) {
              case "Goals":
                iconName = "star-half-outline"
                break;
            
              case "Motivation":
                iconName = "rocket-outline"
                break;

              case "Motivation Sources":
                iconName = "list-outline"
                break;
            }


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name="Goals" component={GoalsScreen} />
          <Tab.Screen name="Motivation" component={MotivationScreen} />
          <Tab.Screen name="Motivation Sources" component={MotivationSourcesScreen} />
        </Tab.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
