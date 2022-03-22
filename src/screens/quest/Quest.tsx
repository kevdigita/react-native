import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {ScrollView, View,Text, FontVariant } from "react-native";
 import {Button} from "~/component/Button"



import {QuProps,Questi,QUESTION} from "~/component/data"
import { RoutParams } from "~/navigator/Rootnavigator";

export const Quest: React.FunctionComponent<QuProps>=({

    
})=>
{
const navigation=useNavigation<NativeStackNavigationProp<RoutParams>>();    
const press=(vrai:String,click:String)=>
{

    navigation.navigate("Val",{
        rest:false
    })
}

return(
    <View>
<ScrollView>
<Text>{QUESTION[1].QUESTION}
</Text>
</ScrollView>

<Button type="validate" onPress={()=>press(QUESTION[1].CORRECT,QUESTION[1].REP) }> { QUESTION[1].REP } </Button>

<Button type="validate" onPress={()=>press(QUESTION[1].CORRECT,QUESTION[1].CORRECT) }> { QUESTION[1].CORRECT } </Button>

<Button type="validate" onPress={()=>press(QUESTION[1].CORRECT,QUESTION[1].REPONSE) }> { QUESTION[1].REPONSE } </Button>

<Button type="validate" onPress={()=>press(QUESTION[1].CORRECT,QUESTION[1].REPON) }> { QUESTION[1].REPON } </Button>

</View>
)


} 



