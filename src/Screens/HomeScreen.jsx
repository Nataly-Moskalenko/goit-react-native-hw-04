// import { StyleSheet, Button } from 'react-native';
// import { Image } from 'react-native-svg';
import { Image } from 'react-native';

import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { ButtonLogOut } from '../Components/Button';
import Icon from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  const Tabs = createBottomTabNavigator();
  const navigation = useNavigation();

  return (    
    <Tabs.Navigator initialRouteName="PostsScreen">
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: 'Posts',
          tabBarShowLabel: false,          
          tabBarIcon: ({ tintColor }) => <Icon name="grid" color={tintColor} size={24} />,          
          // headerStyle: {
          //     justifyContent: 'center',
          // },
          headerRight: () => <ButtonLogOut onPress={() => navigation.navigate('LoginScreen')} />,
        }}
      />
      <Tabs.Screen
        name="CreatePostScreen"
        component={CreatePostsScreen}
        options={{
          title: 'Create Post',         
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ tintColor }) => (
            <Ionicon name="add-circle-outline" color={tintColor} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ tintColor }) => <Icon name="user" color={tintColor} size={24} />,
        }}
      />
    </Tabs.Navigator>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
