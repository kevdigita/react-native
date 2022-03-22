
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tailwind from "tailwind-rn";

interface ButtonProps{
 children:String
    type:"validate"|"BEGIN"
    onPress: () => void
}
export const Button: React.FunctionComponent<ButtonProps>=({
children,
 type="validate",
onPress
    
})=>
{
return(
<TouchableOpacity onPress={onPress} >
<View 
 style={tailwind(
    `px-4 py-2 mt-2 rounded-sm  ${
      type === "BEGIN" ? "bg-red-800 py-2 px-1 mt-5 mb-0 " : "mt-5 mb-2 py-3 bg-black text-center bg-red-400"
    }`
  )}
>
<Text style={tailwind("text-center text-white font-bold text-xl" )}>
   {children}
</Text>

</View>



</TouchableOpacity>





)


}