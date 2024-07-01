import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../screens/Home/Home';
import Cart from '../../screens/Home/Cart';
import Products from '../../screens/Home/Products';
import Profile from '../../screens/Home/Profile';
import WhishList from '../../screens/Home/WhishList';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Drawer.Screen name='Cart' component={Cart} options={{ headerShown: false }} />
            <Drawer.Screen name='Products' component={Products} options={{ headerShown: false }} />
            <Drawer.Screen name='Whishlist' component={WhishList} options={{ headerShown: false }} />
            <Drawer.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}

export default AppDrawer

const styles = StyleSheet.create({})