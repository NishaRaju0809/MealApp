import { View,Text,StyleSheet } from "react-native";

function Title({children}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default Title;

const styles=StyleSheet.create({
    subTitle: {
        fontSize: 22,
        color: "#e2b497",
        fontWeight: "bold",
       
        textAlign: "center",
        
        padding: 4,
      },
      subTitleContainer:{
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2, 
        marginHorizontal:20,
        marginVertical:10
    
      }

})
