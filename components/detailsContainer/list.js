import { View,Text,StyleSheet } from "react-native";

function List({data}){
    return  data.map((dataPoint) => (
            <View key={dataPoint} style={styles.listContainer}>  
    
                <Text style={styles.listText}>{dataPoint}</Text>
            </View>
          ))
    
    

}

export default List;

const styles=StyleSheet.create({
    listContainer:{
        margin:4,
        marginHorizontal:16
        

    },
    listText:{
        color:'#351401',
        backgroundColor:"#e2b497",
        borderRadius:4,
        fontSize:18,
        textAlign:'center',
        padding:4

    }
})