import { StyleSheet, Button } from 'react-native';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

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
          // headerStyle: {
          //     justifyContent: 'center',
          // },
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('LoginScreen')}
              title="Log Out"
              color="rgba(0, 0, 0, 0.3)"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePostScreen"
        component={CreatePostsScreen}
        options={{
          title: 'Create Post',
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
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
