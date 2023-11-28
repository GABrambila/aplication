import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#D3EAF0",
        height:1050,
        justifyContent:'center',
        alignItems:'center',
    },
    containerInput:{
        width:350,
        height:350,
        paddingTop:50,
        backgroundColor:'#D3EAF0',
        borderColor:'black',
        borderLeftWidth:5,
        borderRightWidth:5,
        borderRadius:50,
        alignItems:'center',
        marginBottom:100
    },
 
    txtInput:{
        borderWidth:1,
        borderColor:'#a1a1a1',
        borderRadius:15,
        width:250,
        height:40,
        
    },
    txt:{
        paddingTop:30,
        fontSize:22,
        fontWeight:'bold'
    },
    containerBtn:{
        marginTop:40,
        backgroundColor:'#D3EAF0',
        width:"100%",
        height:300,
        borderTopLeftRadius:100,
        borderTopRightRadius:100,
        borderLeftWidth:5,
        borderRightWidth:5,
        alignItems:'center'
    },

    btn:{
        backgroundColor:'#1BD553',
        width:150,
        height:50,
        borderRadius:30,
        marginTop:40,
        alignItems:'center'
    },
    txtLogin:{
        fontSize:27,
        fontWeight:'bold',
        paddingBottom:5,
       
    },
    txt2:{
        paddingTop:10,
        fontSize:22,
        fontWeight:'bold'
    }
});
export default styles