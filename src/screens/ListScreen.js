import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fetchLocations } from "../services/postgisApi";
export default function ListScreen() {
  const [locations, setLocations] = useState([]);
  const navigation = useNavigation();
useEffect(() => {
    fetchLocations().then(setLocations);
  }, []);
return (
    <View style={styles.container}>
      <Text style={styles.title}>List for my Next Visit</Text>
      <FlatList
        data={locations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Details", { item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text>LAT: {item.latitude}, LON: {item.longitude}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
  item: { padding: 15, borderBottomWidth: 1 },
  name: { fontSize: 18, fontWeight: "600" },
});
