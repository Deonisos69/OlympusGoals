import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// screens
import MotivationScreen from "./components/screens/MotivationScreen";
import GoalsScreen from "./components/screens/GoalsScreen";
import InspirationsScreen from "./components/screens/InspirationsScreen";

// model
import Inspiration from "./model/inspiration";

import FlashMessage from "react-native-flash-message";
import { useState, useEffect } from "react";
import {
  getAllInspirations,
  initTable,
  dropInspirations,
  db,
} from "./drivers/sqliteDriver";
import { localDB } from "./db/db";
import FlatButton from "./components/buttons/flatButton";
import SettingsModal from "./components/modals/SettingsModal";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const inspirationsDB = localDB((state) => state.inspirations);
  const createInspiration = localDB((state) => state.createInspiration);
  const initialLoad = localDB((state) => state.loadInspirationsFromSqlite)

  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  useEffect(() => {
    initTable()
    initialLoad()
    createInspiration(
      new Inspiration(1, "testTitle", "quote", "Es grünt zu grün")
      );
      createInspiration(
        new Inspiration(1, "testTitle2", "quote", "wenn Spaniens Blüten")
        );
        createInspiration(new Inspiration(1, "testTitle3", "quote", "blühen"))
        dropInspirations()
    console.log("DB:", inspirationsDB)
    setIsLoading(false)
  }, []);

  if (isLoading)
    return (
      <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>Database is loading...</Text>
      </View>
    );
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Goals":
                iconName = "star-half-outline";
                break;
                
                case "Motivation":
                  iconName = "rocket-outline";
                  break;
                  
                  case "Inspirations":
                    iconName = "list-outline";
                    break;
                  }
                  
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
                headerRight: () => 
                (<View style={{padding: 10}}>
              <Pressable onPress={() => {
                setSettingsModalOpen(true)
              }}>
                <Ionicons name="settings-outline" size={25} color={settingsModalOpen ? "tomato" : "grey"}/>
              </Pressable>
            </View>)
          ,
          tabBarStyle: { 
            display: settingsModalOpen ? "none" : "flex"
          },
          headerTransparent: "true"
          
        })}
        >
        <Tab.Screen name="Goals" component={GoalsScreen} />
        <Tab.Screen name="Motivation" component={MotivationScreen} />
        <Tab.Screen name="Inspirations" component={InspirationsScreen} />
      </Tab.Navigator>
        {settingsModalOpen ? (<SettingsModal onRequestClose={() => setSettingsModalOpen(false)}/>) : null}
      <StatusBar style="auto" />
      <FlashMessage position="center" floating={true} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
