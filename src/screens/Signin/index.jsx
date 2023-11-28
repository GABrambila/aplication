import { Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable"
import styles from "../Signin/styles";
import { useNavigation } from "@react-navigation/native";
import Home from "../Home";

export default function Signin(){

    const navigation = useNavigation();

    function nextPage(){
        navigation.navigate(Home)
    }

    return(
        <Animatable.View style={styles.container} animation="fadeInUp" delay={900}>

            <Animatable.Text style={styles.txtLogin} animation="fadeInDown" delay={1100} >Login</Animatable.Text>

            <View style={styles.containerInput}>
                
                <Text style={styles.txt}>E-mail</Text>
                <TextInput style={styles.txtInput} keyboardType="email-address" placeholder="                    Digite seu E-mail" ></TextInput>            
                        
                <Text style={styles.txt} >Senha</Text>
                <TextInput style={styles.txtInput} keyboardType='default' placeholder="                      Digite a senha" ></TextInput>
            </View>

            <View style={styles.containerBtn}>

                <TouchableOpacity onPress={nextPage} style={styles.btn}><Text style={styles.txt2}>Entrar</Text></TouchableOpacity>

            </View>     
            
        </Animatable.View>
    )
}