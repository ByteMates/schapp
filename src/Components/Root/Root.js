import React from 'react';

import { createDrawerNavigator ,DrawerActions} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Button} from 'react-native-elements';
import AuthContext from "../Auth/Context"
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerContent} from "../Home/DrawerContent"

Icon.loadFont();

import MaterialIcon from "react-native-vector-icons/MaterialIcons"

import HomeScreen from "../Home/Home";
import DonationScreen from "../Donations/Donation"
import {SignInScreen} from "../Auth/SignIn"
import SignUpScreen from "../Auth/SignUp"
import SplashScreen from "../Auth/Splash"

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const DrawerButton = (props) => {
	return (
    <Button
    color = "white "
    type="clear"
    icon={
      <Icon
        name="bars"
        size={20}
        color="black"
      />
    }
    style = {{background:'white',marginLeft:10}}
    onPress={() => {props.navigation.openDrawer()}}
  />
  );
};

function HomeStackNavigator() {
    return (
      <Stack.Navigator > 
        <Stack.Screen name="Home" component={HomeScreen} options = {({navigation}) => ({
      title: "Home",
      headerLeft:() => <DrawerButton navigation={navigation}  />
    })} />
      </Stack.Navigator>
      
    );
 }

 function AuthNavigator (){
    return(
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </Stack.Navigator>
    )
 }

 function TabNavigator(){
   return(
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={HomeStackNavigator} options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="home" color={color} size={26} />
          ),
        }}/>
        <BottomTab.Screen name="Donations" component={DonationScreen} options={{
          tabBarLabel: 'Apply Filter',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="notifications" color={color} size={26} />
          ),
        }} />
      </BottomTab.Navigator>

   )
      
 }

 function RootNavigator(){
    const [userToken,setUserToken] = React.useState(null)
    const authContext = React.useMemo(() => {
        return{
            signIn:() =>{
                setUserToken("abcd")
            },
            signUp:() => {
                setUserToken("abcd");
            },
            signOut:()=>{
                setUserToken(null);
            }
        }
    },[])
        return(
            <AuthContext.Provider value={authContext}> 
                <NavigationContainer>
                {
                userToken == null ? (
                  <AuthNavigator/>
                    
                ):(
                    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
                    <Drawer.Screen name="Home" component={TabNavigator} />
                    </Drawer.Navigator>

                )}
                    
                </NavigationContainer>
            </AuthContext.Provider>
           
       )
    
}


export default RootNavigator