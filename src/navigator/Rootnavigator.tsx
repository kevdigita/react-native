import React  from "react"
import { Home } from "~/screens/home"
import { Quest } from "~/screens/quest"
import { Val } from "~/screens/val"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
export type RoutParams={
    Home: undefined
    Quest:undefined
Val:{
    rest:Boolean
}
}

const stack=createNativeStackNavigator<RoutParams>();
export const Rootnavigator=()=>

{
    return <stack.Navigator>
<stack.Group>
<stack.Screen name="Home" component={Home} />
<stack.Screen name="Quest" component={Quest} />
<stack.Screen name="Val" component={Val} />
</stack.Group>

    </stack.Navigator>

}