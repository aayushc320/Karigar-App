import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Homepage from './Homepage';
import Details from './Details';
import Setting from './Setting';
import Books from './Books';

const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const booksName ="Books";


const Tab = createBottomTabNavigator();
function Navigation() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
  
              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';
  
              } else if (rn === detailsName) {
                iconName = focused ? 'list' : 'list-outline';
  
              } else if (rn === settingsName) {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (rn === booksName) {
                iconName = focused ? 'list': 'list-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#7F90AB',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70}
          }}>
  
          <Tab.Screen name={homeName} component={Homepage} options={{ headerShown: false}} />
          <Tab.Screen name={detailsName} component={Details} options={{ headerShown: false}} />
          <Tab.Screen name={settingsName} component={Setting} options={{ headerShown: false}} />
          <Tab.Screen name={booksName} component={Books} options={{ headerShown: false}} />
  
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;