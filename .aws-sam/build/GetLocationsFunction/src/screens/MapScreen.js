import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
export default function MapScreen({ route }) {
  const { item } = route.params;
return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: item.latitude,
          longitude: item.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={{ latitude: item.latitude, longitude: item.longitude }} />
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: "100%", height: "100%" },
});
