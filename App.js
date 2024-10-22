import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';

const Stack = createNativeStackNavigator();

//VIDEO 102 SEURAAVA 22.10
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Meal Categories"
            component={CategoriesScreen}
            />
          <Stack.Screen name ="Meals Overview"
            component={MealsScreen}
            options={({ route }) => ({ title: `Meals Overview - ${route.params.categoryTitle}` })}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
});


