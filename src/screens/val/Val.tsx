import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { RoutParams } from "~/navigator/Rootnavigator";

interface ValProps{}

export const Val: React.FunctionComponent<ValProps>=({})=>
{
const use=useRoute<RouteProp<RoutParams>>()
if(use.params?.rest==true)
{


return(
<View>
    
</View>

)

}
else
{

return(

<View>


</View>
    )

}
}


