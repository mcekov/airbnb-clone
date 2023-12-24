import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapView from "react-native-map-clustering";
import Colors from "@/constants/Colors";
import { memo } from "react";

interface Props {
  listings: any;
}

const INITIAL_REGION = {
  latitude: 52.52437,
  longitude: 13.41053,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

/* const INITIAL_REGION = {
  latitude: 37.33,
  longitude: -122,
  latitudeDelta: 9,
  longitudeDelta: 9,
}; */

const ListingsMap = memo(({ listings }: Props) => {
  const router = useRouter();

  const onMarkerSelected = (item: any) => {
    router.push(`/listing/${item.properties.id}`);
  };

  const renderCluster = (cluster: any) => {
    const { id, geometry, properties, onPress } = cluster;
    const points = properties.point_count;

    return (
      <Marker
        key={`cluster-${id}`}
        coordinate={{
          longitude: geometry.coordinates[0],
          latitude: geometry.coordinates[1],
        }}
        onPress={onPress}
      >
        <View style={styles.marker}>
          <Text
            style={{
              color: "#000",
              fontFamily: "gotham-m",
              alignItems: "center",
            }}
          >
            {points}
          </Text>
        </View>
      </Marker>
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        showsUserLocation
        animationEnabled={false}
        clusterColor="#fff"
        clusterTextColor="#000"
        clusterFontFamily="gotham-m"
        initialRegion={INITIAL_REGION}
        renderCluster={renderCluster}
      >
        {listings.features.map((item) => (
          <Marker
            key={item.properties.id}
            coordinate={{
              latitude: +item.properties.latitude,
              longitude: +item.properties.longitude,
            }}
            onPress={() => onMarkerSelected(item)}
          >
            <View style={styles.marker}>
              <Text style={styles.markerText}>€ {item.properties.price}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    borderRadius: 12,
  },
  markerText: {
    fontSize: 14,
    fontFamily: "gotham-m",
  },
});

export default ListingsMap;
