import { View, Image, ImageBackground,StyleSheet, Text } from "react-native";
import React from "react"
import { Button } from "~/component/Button";
import { useNavigation } from "@react-navigation/native";
import { RoutParams } from "~/navigator/Rootnavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import tailwind from "tailwind-rn";

interface HomeProps{}

export const Home : React.FunctionComponent<HomeProps> = ({}) => {
const navigation=useNavigation<NativeStackNavigationProp<RoutParams>>()
    const press=()=>
{
navigation.navigate('Quest')
}
    return(
        <ImageBackground source={require("../../IMG/14018.gif")} style={{ backfaceVisibility:"visible", width:"100%" ,height:"100%"}}>
            <View >
                <Text style={tailwind("text-center  text-xl font-bold text-white py-20 px-20 mt-20 mb-20 ")} >OTAKU QUIZZ

                </Text>
             

                <Button onPress={press} type="BEGIN">COMMENCER</Button>
                        
                    
             
      
            </View>
        </ImageBackground>
        );

};
