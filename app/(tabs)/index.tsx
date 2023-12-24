import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import { useMemo, useState } from "react";
import ListingsMap from "@/components/ListingsMap";

import listngData from "@/assets/data/airbnb-listings.json";
import listngDataGeo from "@/assets/data/airbnb-listings.geo.json";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listngData as any, []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      {/*  <Listings listings={items} category={category} /> */}
      <ListingsMap listings={listngDataGeo} />
    </View>
  );
};

export default Page;
