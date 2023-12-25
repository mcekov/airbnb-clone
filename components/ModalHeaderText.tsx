import Colors from "@/constants/Colors";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ModalHeaderText = () => {
  const [active, setActive] = useState(0);

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,

        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => setActive(0)}>
        <Text
          style={{
            fontFamily: "gotham-m",
            fontSize: 18,
            color: active == 0 ? "#000" : "#a2a2a2",
            textDecorationLine: active == 0 ? "underline" : "none",
          }}
        >
          Stays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive(1)}>
        <Text
          style={{
            fontFamily: "gotham-m",
            fontSize: 18,
            color: active == 1 ? "#000" : "#a2a2a2",
            textDecorationLine: active == 1 ? "underline" : "none",
          }}
        >
          Experiences
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeaderText;
