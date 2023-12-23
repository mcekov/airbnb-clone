import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import listingsData from "@/assets/data/airbnb-listings.json";
import Animated from "react-native-reanimated";

const IMG_HEIGHT = 300;
const { width } = Dimensions.get("window");

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const listing = (listingsData as any[]).find((item) => item.id === id);

  return (
    <View style={styles.container}>
      <Animated.ScrollView>
        <Animated.Image
          source={{ uri: listing.xl_picture_url }}
          style={styles.image}
        />
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    height: IMG_HEIGHT,
    width: width,
  },
});

export default Page;