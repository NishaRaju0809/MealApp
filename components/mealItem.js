import { View, Text,Platform, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./details";
function MealItem({id, title, imageUrl, affordability, duration, complexity }) {
    const navigation=useNavigation();

    function mealPressHandler(){
        navigation.navigate('detailsScreen',{
            mealId:id
        })
    }
    
  return (
    <View style={styles.container}>
      <Pressable android_ripple={'#ccc'} style={({pressed})=>pressed? styles.buttonPressed: null}
      onPress={mealPressHandler}>
        <View style={styles.innerContainer}>
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails affordability={affordability} duration={duration} complexity={complexity}/>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },

  container: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: "0.35",
    shadowOffset: { width: 0, height: 2 },
    overflow:Platform.OS==='android'?'hidden':'visible'

  },
  innerContainer:{
     borderRadius:8,
     overflow:'hidden'
  },
 
  buttonPressed:{
    opacity:0.5,
  
   }
});
