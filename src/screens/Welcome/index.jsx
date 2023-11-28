import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "../Welcome/styles"
import * as Animatable from "react-native-animatable"
import { useNavigation } from "@react-navigation/native";

export default function Welcome(){



    const navigation = useNavigation()

    function NextPage(){
    navigation.navigate('Login')
 }

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Animatable.Image animation="fadeInUp" style={{height:"60%", width:'90%', borderRadius:1000}}  source={require('../../../assets/logo.jpg')} />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.secondContain}>
                
                <TouchableOpacity onPress={NextPage} style={styles.btn}><Text style={styles.txt}>Faça login</Text></TouchableOpacity>
            </Animatable.View>
        </View>
    )
}