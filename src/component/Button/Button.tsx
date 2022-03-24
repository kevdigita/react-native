import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tailwind from "tailwind-rn";
import {Questi} from "../data"
interface ButtonProps {
  children: String
  type: "validate" | "BEGIN"|"REPONSE"
  onPress: () => void
}
export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  type = "validate",
  onPress

}) => {
  return (
    <TouchableOpacity onPress={onPress} >
      <View
         style={tailwind(
          `px-4 py-2 mt-2 rounded-sm 
           ${type === "BEGIN" ? "bg-red-800 py-2 px-1  ml-10 mr-10 rounded-lg border-blue-600 border-solid border" :type==='validate'? 
          "mt-5 mb-2 py-3 bg-black  border border-red-300 rounded-full border-solid  text-center":"bg-green-800 mt-10 rounded-lg border-blue-600 border-solid border"
          }`
        )}
      >
        <Text style={tailwind("text-center text-white font-bold text-xl")}>
          {children}
        </Text>

      </View>



    </TouchableOpacity>





  )


}