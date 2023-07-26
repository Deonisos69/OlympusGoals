import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons"

// screens
import MotivationScreen from './components/screens/MotivationScreen';
import GoalsScreen from './components/screens/GoalsScreen';
import InspirationsScreen from './components/screens/InspirationsScreen';


import FlashMessage from 'react-native-flash-message';
import { useState, useEffect } from 'react';
import { createInspiration, getAllInspirations, initTable, db, dropInspirations } from './drivers/dbDriver';

const Tab = createBottomTabNavigator();

export default function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    initTable()
    createInspiration("testTitle", "testType", "testValue")
    createInspiration("testTitle2", "testType", "testValue2")
    createInspiration("testTitle3", "testType", "testValue3")
    getAllInspirations()

    
    dropInspirations()
    setIsLoading(false)
    
  }, [])
  
  if (isLoading) return <View style={{alignItems: "center", flex: 1, justifyContent: "center"}}><Text style={{fontSize: 20}}>Database is loading...</Text></View>
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
                    
                    case "Inspirations":
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
            <Tab.Screen name="Inspirations" component={InspirationsScreen} />
          </Tab.Navigator>
          <StatusBar style="auto" />
          <FlashMessage position="center" floating={true}/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
