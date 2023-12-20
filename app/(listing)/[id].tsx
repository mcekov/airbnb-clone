import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Listing details {id}</Text>
    </View>
  );
};

export default Page;
