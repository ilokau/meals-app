import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();

//video 105 seuraava 22.10

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#c289a6' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#ebc1d6' },
        }}>
          <Stack.Screen name="Meal Categories"
            component={CategoriesScreen}
            options= {{ 
              title: 'All Meal Categories',
              

              }}
            />
          <Stack.Screen name ="Meals Overview"
            component={MealsScreen}
            
            />

          <Stack.Screen name="Meal Details"
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
});


