import React  from "react"
import { Home } from "~/screens/home"
import { Quest } from "~/screens/quest"
import {Val} from "~/screens/val"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { Erre } from "~/screens/Erre"

export type RoutParams={
    Home: undefined
    Quest:undefined
Val:undefined
Erre:undefined
}

const stack=createNativeStackNavigator<RoutParams>();
export const Rootnavigator=()=>

{
    return (
    <stack.Navigator initialRouteName="Home" >
<stack.Group>
<stack.Screen name="Home" component={Home} />
<stack.Screen navigationKey="new"  name="Quest" component={Quest} initialParams
/>

</stack.Group>
<stack.Group>
<stack.Screen name="Erre" component={Erre} />
<stack.Screen name="Val" component={Val} />

</stack.Group>
    </stack.Navigator>
    )
}