import { StatusBar,Button } from 'react-native';
import { StyleSheet } from 'react-native';
import  {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CategoryScreen from './screens/categoryScreen';
import MealsOverViewScreen from './screens/mealsOverViewScreen';
import DetailsScreen from './screens/detailsScreen';

const Stack =createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar styles='light'  />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#351401'},
          headerTintColor:'white',
          contentStyle:{backgroundColor:'#3f2f25'}
          }}>
        <Stack.Screen name="MealsCategories" component={CategoryScreen} options={{
          title:'All Categories',
          }
        }/>
        <Stack.Screen  name ="MealsOverView" component={MealsOverViewScreen}/>
        <Stack.Screen name="detailsScreen" component={DetailsScreen }
        // first method of editing button on the right of the header
        // options={{
        //   headerRight:()=>(<Button title='Tap me'/>)
             
        // }}
        />
      </Stack.Navigator>
     
    </NavigationContainer>
    </>
   
  );
}

const styles = StyleSheet.create({
  
});
