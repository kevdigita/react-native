import React  from "react"
import { Home } from "~/screens/home"
import { Quest } from "~/screens/quest"
import {Val} from "~/screens/val"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { Erre } from "~/screens/Erre"
import tailwind from "tailwind-rn"

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
    <stack.Navigator initialRouteName="Home" 
     >
<stack.Group>
<stack.Screen name="Home" component={Home} options={{
animationTypeForReplace:"push",
title:"OTAKU QUIZZ",
headerBackVisible:false,
headerTitleStyle:{ 
        
    fontWeight:"bold"
},
headerTitleAlign:"center"

}} />
<stack.Screen navigationKey="new"  name="Quest" component={Quest} initialParams={{nbq:undefined}}
options={{
    animationTypeForReplace:"push",
    title:"OTAKU QUIZZ",
    headerBackVisible:true,
    headerTitleStyle:{ 
        
        fontWeight:"bold"
    },
    headerTitleAlign:"center"
    }}
/>

</stack.Group>
<stack.Group>
<stack.Screen name="Erre" component={Erre} 
options={{
animationTypeForReplace:"push",
title:"OTAKU QUIZZ",
headerBackVisible:false,
headerTitleStyle:{ 
        
    fontWeight:"bold"
},
headerTitleAlign:"center"

}}
/>
<stack.Screen name="Val" component={Val} 
options={{
    animationTypeForReplace:"push",
    title:"OTAKU QUIZZ",
    headerBackVisible:false,
    headerTitleStyle:{ 
            
        fontWeight:"bold"
    },
    headerTitleAlign:"center"
    
    }}
/>

</stack.Group>
    </stack.Navigator>
    )
}