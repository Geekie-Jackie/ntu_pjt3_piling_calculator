import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { TextInput, Button, Card } from "react-native-paper";
import { CalculatePileInstallation } from "../utils/CalculatePileInstallation";

const CalculatorScreen = () => {
  const [casingTopLevel, setCasingTopLevel] = useState("");
  const [groundLevel, setGroundLevel] = useState("");
  const [cutOffLevel, setCutOffLevel] = useState("");
  const [tapeLength, setTapeLength] = useState("");
  const [designLength, setDesignLength] = useState("");

  const handleCalculate = () => {
    const result = CalculatePileInstallation(
      parseFloat(casingTopLevel),
      parseFloat(groundLevel),
      parseFloat(cutOffLevel),
      parseFloat(tapeLength),
      parseFloat(designLength)
    );
    // Handle the result as needed
    console.log("Result:", result);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card.Cover
        source={require('../../assets/Piling_Diagram.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <TextInput
        label="Casing Top Level (RLm/mSHD)"
        value={casingTopLevel}
        onChangeText={(text) => setCasingTopLevel(text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Ground Level (RLm/mSHD)"
        value={groundLevel}
        onChangeText={(text) => setGroundLevel(text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Cut off Level (RLm/mSHD)"
        value={cutOffLevel}
        onChangeText={(text) => setCutOffLevel(text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Actual Length from Casing Top Level 'Tape Length' (m)"
        value={tapeLength}
        onChangeText={(text) => setTapeLength(text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Design Length from Cut Off Level (m)"
        value={designLength}
        onChangeText={(text) => setDesignLength(text)}
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleCalculate} style={styles.button}>
        Calculate
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: '100%',
    // height: 400, // Adjust the height as needed
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default CalculatorScreen;
