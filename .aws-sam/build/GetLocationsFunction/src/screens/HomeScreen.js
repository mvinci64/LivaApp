import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
export default function HomeScreen() {
  const [selectedDamage, setSelectedDamage] = useState("Group 3 (40-60%)");
  const navigation = useNavigation();
return (
    <View style={styles.container}>
      <Text style={styles.title}>Nepal Aid</Text>
      <Text style={styles.label}>Choose the Damage Range</Text>
<Picker
        selectedValue={selectedDamage}
        onValueChange={(itemValue) => setSelectedDamage(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Group 1 (0-20%)" value="Group 1" />
        <Picker.Item label="Group 2 (20-40%)" value="Group 2" />
        <Picker.Item label="Group 3 (40-60%)" value="Group 3" />
      </Picker>
<Button title="Create List" onPress={() => navigation.navigate("List")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  label: { fontSize: 16 },
  picker: { height: 50, width: "100%" },
});
