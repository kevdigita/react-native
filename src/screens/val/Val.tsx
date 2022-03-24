import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View ,Text,Image} from "react-native";
import { RoutParams } from "~/navigator/Rootnavigator";
import tailwind from "tailwind-rn"
import {Button} from "../../component/Button"
  
interface ValProps{}

export const Val: React.FunctionComponent<ValProps>=({})=>
{


const navigation=useNavigation<NativeStackNavigationProp<RoutParams>>();  





return(<View style={{alignContent:"center" ,backgroundColor:"black",alignItems:'center',height:"100%" }}>
<Text style={tailwind("font-bold bg-green-500 text-white mb-5 mt-5 text-xl border border-solid ")}>
  BONNE REPONSE</Text> 
<Image source={require("../../IMG/Naruto3.gif")} style={{position:"relative", width:"100%" ,height:"50%"}}/>
      

 <Button onPress={()=>   navigation.navigate("Quest")} type="REPONSE">
  CONTINUER
</Button>
<Button onPress={()=>   navigation.navigate("Home")} type="BEGIN">
  HOME
</Button>
</View>


)

}


