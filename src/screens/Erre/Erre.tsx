import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View ,Text} from "react-native";
import { RoutParams } from "~/navigator/Rootnavigator";


interface ErreProps{}

export const Erre: React.FunctionComponent<ErreProps>=({})=>
{


const navigation=useNavigation<NativeStackNavigationProp<RoutParams>>();  

const go=()=>
{ 
    
    
        navigation.navigate("Quest")   

}



return(
<View>
   <Text onPress={go} >
    juste
  </Text>
</View>

)

}


