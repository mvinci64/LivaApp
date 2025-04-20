import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function DetailsScreen({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();
return (
    <View style={styles.container}>
      <Text style={styles.title}>Selected Map</Text>
      <Text>DISTRICT: {item.district}</Text>
      <Text>WARD: {item.ward}</Text>
      <Text>Latitude: {item.latitude}</Text>
      <Text>Longitude: {item.longitude}</Text>
      <Button title="View on Map" onPress={() => navigation.navigate("Map", { item })} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
});
