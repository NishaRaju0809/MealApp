import { View, Text,StyleSheet } from "react-native";


function MealDetails({affordability,duration,complexity,textStyle}){
return (
    <View style={styles.summary}>
          <Text style={[styles.summaryText,textStyle]}> {affordability.toUpperCase()}</Text>
          <Text style={[styles.summaryText,textStyle]}>{duration} minutes</Text>
          <Text style={[styles.summaryText,textStyle]}>{complexity.toUpperCase()}</Text>
        </View>
)
}

export default  MealDetails;

const styles=StyleSheet.create({
    summary: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
    
        justifyContent: "center",
      },
      summaryText: {
        fontSize: 12,
        marginHorizontal: 10,
      },
})