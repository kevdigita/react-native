import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {ScrollView, View,Text, FontVariant, ImageBackground } from "react-native";
import tailwind from "tailwind-rn";
 import {Button} from "~/component/Button"

import {QuProps,QUESTION} from "~/component/data"
import { RoutParams } from "~/navigator/Rootnavigator";

 var nbq=0
export const Quest: React.FunctionComponent<QuProps>=({})=>
{   
 nbq = Math.floor( Math.random()*(133-1))+1;
    nbq-1
const navigation=useNavigation<NativeStackNavigationProp<RoutParams>>();  



const press=(vrai:String,click:String)=>

{
   if(vrai==click)
    {
        navigation.navigate("Val")
    }
    else{
    navigation.navigate("Erre")
    }
}
var nb = Math.floor( Math.random()*(4-1))+1;
if (nb==1)
{

return(
    <View style={tailwind("text-center text-justify  bg-black font-bold h-full w-full")}>

       
       <Text style={tailwind("text-center bg-pink-200 text-4xl font-bold ")}>{QUESTION[nbq].MANGA }</Text>
     
<ScrollView style={tailwind("text-center  bg-white")}>
<Text style={tailwind("text-center mt-1  bg-white text-xl font-bold")}>{QUESTION[nbq].QUESTION }
</Text>

</ScrollView>

<Button type="validate" onPress={()=>press(QUESTION[nbq].CORRECT,QUESTION[nbq].REP) }> { QUESTION[nbq].REP } </Button>

<Button type="validate" onPress={()=>press(QUESTION[nbq].CORRECT,QUESTION[nbq].CORRECT) }> { QUESTION[nbq].CORRECT } </Button>

<Button type="validate" onPress={()=>press(QUESTION[nbq].CORRECT,QUESTION[nbq].REPONSE) }> { QUESTION[nbq].REPONSE } </Button>

<Button type="validate" onPress={()=>press(QUESTION[nbq].CORRECT,QUESTION[nbq].REPON) }> { QUESTION[nbq].REPON } </Button>

</View>
)
    
}
if (nb==2)
{

return(
    <View style={tailwind("text-center text-justify  bg-black font-bold h-full w-full")}>

       
       <Text style={tailwind("text-center bg-pink-200 text-4xl font-bold ")}>{QUESTION[nbq].MANGA }</Text>
     
<ScrollView style={tailwind("text-center  bg-white")}>
<Text style={tailwind("text-center mt-1  bg-white text-xl font-bold")}>{QUESTION[nbq].QUESTION }
</Text>

</ScrollView>

<Button type="validate" onPress={()=>press(QUESTION[nbq].CORRECT,QUESTION[nbq].CORRECT) }> { QUESTION[nbq].CORRECT } </Button>

<Button type="validate" onPress={()=>press(QUESTION[nbq].CORRECT,QUESTION[nbq].REP) }> { QUESTION[nbq].REP } </Button>

<Button type="validate" onPress={()=>press(QUESTION[nbq].CORRECT,QUESTION[nbq].REPONSE) }> { QUESTION[nbq].REPONSE } </Button>

<Button type="validate" onPress={()=>press(QUESTION[nbq].CORRECT,QUESTION[nbq].REPON) }> { QUESTION[nbq].REPON } </Button>

</View>
)
    
}
if (nb==3)
{

return(
    <View style={tailwind("text-center text-justify  bg-black font-bold h-full w-full")}>

       
       <Text style={tailwind("text-center bg-pink-200 text-4xl font-bold ")}>{QUESTION[nbq].MANGA }</Text>
     
<ScrollView style={tailwind("text-center  bg-white")}>
<Text style={tailwind("text-center mt-1  bg-white text-xl font-bold")}>{QUESTION[nbq].QUESTION }
</Text>

</ScrollView>

<Button type="validate" onPress={()=>press(QUESTION[nbq].CORRECT,QUESTION[nbq].REP) }> { QUESTION[nbq].REP } </Button>

<Button type="validate" onPress={()=>press(QUESTION[nbq].CORRECT,QUESTION[nbq].REPONSE) }> { QUESTION[nbq].REPONSE } </Button>

<Button type="validate" onPress={()=>press(QUESTION[nbq].CORRECT,QUESTION[nbq].CORRECT) }> { QUESTION[nbq].CORRECT } </Button>

<Button type="validate" onPress={()=>press(QUESTION[nbq].CORRECT,QUESTION[nbq].REPON) }> { QUESTION[nbq].REPON } </Button>

</View>
)
    
}
if (nb==4)
{

return(
    <View style={tailwind("text-center text-justify  bg-black font-bold h-full w-full")}>

       
       <Text style={tailwind("text-center bg-pink-200 text-4xl font-bold ")}>{QUESTION[nbq].MANGA }</Text>
     
<ScrollView style={tailwind("text-center  bg-white")}>
<Text style={tailwind("text-center mt-1  bg-white text-xl font-bold")}>{QUESTION[nbq].QUESTION }
</Text>

</ScrollView> 

<Button type="validate" onPress={()=>press(QUESTION[nbq].CORRECT,QUESTION[nbq].REP) }> { QUESTION[nbq].REP } </Button>

<Button type="validate" onPress={()=>press(QUESTION[nbq].CORRECT,QUESTION[nbq].REPONSE) }> { QUESTION[nbq].REPONSE } </Button>

<Button type="validate" onPress={()=>press(QUESTION[nbq].CORRECT,QUESTION[nbq].REPON) }> { QUESTION[nbq].REPON } </Button>

<Button type="validate" onPress={()=>press(QUESTION[nbq].CORRECT,QUESTION[nbq].CORRECT) }> { QUESTION[nbq].CORRECT } </Button>

</View>
)
    
}

} 



