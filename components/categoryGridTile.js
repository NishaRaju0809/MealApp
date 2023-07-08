import { Pressable,Platform, View, Text ,StyleSheet} from "react-native";

function CategoryGridTile({ title, color ,buttonPressed}) {
  return (
    <View style={styles.gridItem}>
      <Pressable android_ripple={{color:'#ccc'}}
       style={({pressed})=>[styles.button,pressed? styles.buttonPressed: null]}
       onPress={buttonPressed}>
        <View style={[styles.innerContainer,{backgroundColor:color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryGridTile;

const styles=StyleSheet.create({
 gridItem:{
  flex:1,
  margin:16,
  
  height:100,
  
  elevation:4,
  shadowColor:'black',
  shadowOpacity:'0.25',
  shadowOffset:{width:0, height:2},
  overflow:Platform.OS==='android'?'hidden':'visible'


 },
 innerContainer:{
  flex:1,
  padding:16,
  justifyContent:'center',
  borderWidth:1,
  borderRadius:8,
  alignItems:'center'
 },
 button:{
  flex:1
 },
 title:{
  fontSize:18,
  fontWeight:'bold'
 },
 buttonPressed:{
  opacity:0.5,

 }
})
