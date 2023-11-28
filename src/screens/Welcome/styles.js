import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ACE7F8"
    },
    imageContainer:{
        backgroundColor:"#ACE7F8", 
        alignItems:'center', 
        flex:3, 
        marginTop:50
    },
    secondContain:{
        borderTopLeftRadius:80,
        borderTopRightRadius:80,
        flex:1,
        backgroundColor:'#D3EAF0',
        alignItems:'center'
    },
    btn:{
        backgroundColor:'#1BD553',
        width:150,
        height:50,
        borderRadius:30,
        marginTop:60,
        alignItems:'center'
    },
    txt:{
        fontSize:20,
        fontWeight:'bold',
        color:"#56615A",
        marginTop:10
    }
});
 export default styles