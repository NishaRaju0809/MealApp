import {  Text, StyleSheet, Image,ScrollView,Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/details";
import Title from "../components/detailsContainer/title";
import List from "../components/detailsContainer/list";
import IconButton from "../components/iconButton";
import { useLayoutEffect } from "react";

function DetailsScreen({ route ,navigation}) {
  const mealId = route.params.mealId;

function headerRightHandler(){
    console.log("pressed")

}
  const selectMeal = MEALS.find((meal) => meal.id === mealId);

  // second method of writing header Right...
 useLayoutEffect(()=>{
   navigation.setOptions({
   headerRight:()=>{return(<IconButton icon="star"   color="white"  IconPress={headerRightHandler}/>)}

   })
 },[])


  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectMeal.imageUrl }} />
      <Text style={styles.title}>{selectMeal.title}</Text>

      <MealDetails
        duration={selectMeal.duration}
        affordability={selectMeal.affordability}
        complexity={selectMeal.complexity}
        textStyle={styles.detailText}
      />
      <Title>ingredients</Title> 
      <List data={selectMeal.ingredients}/>
      
      <Title>Steps</Title>
      <List data={selectMeal.steps}/>
    </ScrollView>
  );
}
export default DetailsScreen;

const styles = StyleSheet.create({

 rootContainer:{
 margin:10,
 marginBottom:32
 },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
    textAlign: "center",
    padding: 14,
  },
  detailText: {
    color: "white",
  },
  
});
