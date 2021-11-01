import React from "react";
import { Image, Text, View } from "react-native";

import { tailwind } from "tailwind";
import { Button } from "~/components/Button";
import { Card } from "~/components/Card";

interface ProfileProps {}

export const Profile: React.FunctionComponent<ProfileProps> = ({}) => {
  const buttonPressed = () => {
    console.log("hey");
  };
  return (
    <Card>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1551783037-abc1c6093c85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        }}
        resizeMode="cover"
        style={[
          {
            width: 240,
            height: 160,
          },
          tailwind("rounded-t"),
        ]}
      />
      <View style={tailwind("p-5")}>
        <Text style={tailwind("font-bold text-xl")}>Kimmy Love 💖</Text>
        <Text style={tailwind("text-xs text-gray-500 mb-4")}>
          24 ans / Chant / Vivre
        </Text>
        <Button onPress={buttonPressed}>Envoyer un kiss 😘</Button>
        <Button onPress={buttonPressed} type="secondary">
          Ne pas donner suite
        </Button>
      </View>
    </Card>
  );
};
