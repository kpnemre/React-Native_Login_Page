import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
import { MainTabScreen, DrawerContent, SupportScreen, SettingsScreen, BookmarkScreen} from './pages';



const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>

      {/* <Drawer.Navigator initialRouteName="Home"> */}

  <Drawer.Navigator  drawerContent={props => <DrawerContent {...props} />}>

      
        {/* 
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
         */}

        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// <NavigationContainer>
// <Drawer.Navigator drawerContent ={text =><DrawerContent {...text}/>}>
//   {/* <Drawer.Screen name="Home" component={MainTabScreen} /> */}
//   {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
// </Drawer.Navigator>
// </NavigationContainer>

// PART-1 STACK NAV

// <NavigationContainer>
// <Stack.Navigator screenOptions={{
//             headerStyle: {
//               backgroundColor: '#009387',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
// }}>
//   <Stack.Screen name="Home" component={HomeScreen} />
//   <Stack.Screen name="Details" component={DetailsScreen} />
// </Stack.Navigator>
// </NavigationContainer>