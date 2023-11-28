import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Signin from "../screens/Signin";
import Home from "../screens/Home";
import Permission from "../Map";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
            />
           
            <Stack.Screen
                name="Login" 
                component={Signin}
            />

            <Stack.Screen
                name="Home"
                component={Home}/>
        </Stack.Navigator>
    )
}