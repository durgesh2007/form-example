import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirstPage } from "../pages/First";
import { Home } from '../pages/Home';
import { PageBase } from '../pages/PageBase';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

const Stack: any = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: true
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          name="PageBase"
          component={PageBase}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};