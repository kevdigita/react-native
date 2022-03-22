
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
      type === "BEGIN" ? "bg-primary" : "bg-white text-center text-primary"
    }`
  )}
>
<Text>
   {children}
</Text>

</View>



</TouchableOpacity>





)


}