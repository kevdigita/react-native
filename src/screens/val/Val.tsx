import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View ,Text} from "react-native";
import { RoutParams } from "~/navigator/Rootnavigator";

  
interface ValProps{}

export const Val: React.FunctionComponent<ValProps>=({})=>
{


const navigation=useNavigation<NativeStackNavigationProp<RoutParams>>();  





return(
<View> 
  <Text onPress={ ()=> navigation.navigate("Quest")   }>
    juste
  </Text>
</View>

)

}


