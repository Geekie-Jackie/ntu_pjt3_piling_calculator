import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { TextInput, Button, Card, Text } from "react-native-paper";
import CalculatePileInstallation from "../util/CalculatePileInstallation";
import EmailComposer from "../email/EmailComposer";

const CalculatorScreen = () => {
  const [casingTopLevel, setCasingTopLevel] = useState("");
  const [groundLevel, setGroundLevel] = useState("");
  const [cutOffLevel, setCutOffLevel] = useState("");
  const [tapeLength, setTapeLength] = useState("");
  const [designLength, setDesignLength] = useState("");
  const [result, setResult] = useState(null); // State to store the computed result
  const [emailReady, setEmailReady] = useState(false); // New state to manage email sending

  const validateFloatInput = (text, setValue) => {
    // Regular expression to check if the input is a valid float number
    const floatRegex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
    if (floatRegex.test(text) || text === "") {
      setValue(text);
    }
  };

  const handleCalculate = () => {
    // Call CalculatePileInstallation and store the result directly in the state
    const resultValue = CalculatePileInstallation(
      parseFloat(casingTopLevel),
      parseFloat(groundLevel),
      parseFloat(cutOffLevel),
      parseFloat(tapeLength),
      parseFloat(designLength)
    );

    // Update the state with the computed result
    setResult(resultValue);
    setEmailReady(false); // Reset email state when a new calculation is made
  };

  const handleSendEmail = () => {
    setEmailReady(true); // Set the email state to true when the email button is pressed
  };

  const handleReset = () => {
    // Clear all input fields and result
    setCasingTopLevel("");
    setGroundLevel("");
    setCutOffLevel("");
    setTapeLength("");
    setDesignLength("");
    setResult(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card.Cover
        source={require("../../assets/Piling_Diagram.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <TextInput
        label="Casing Top Level (RLm/mSHD)"
        value={casingTopLevel}
        onChangeText={(text) => validateFloatInput(text, setCasingTopLevel)}
        keyboardType="numeric"
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Ground Level (RLm/mSHD)"
        value={groundLevel}
        onChangeText={(text) => validateFloatInput(text, setGroundLevel)}
        keyboardType="numeric"
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Cut off Level (RLm/mSHD)"
        value={cutOffLevel}
        onChangeText={(text) => validateFloatInput(text, setCutOffLevel)}
        keyboardType="numeric"
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Actual Length from Casing Top Level 'Tape Length' (m)"
        value={tapeLength}
        onChangeText={(text) => validateFloatInput(text, setTapeLength)}
        keyboardType="numeric"
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Design Length from Cut Off Level (m)"
        value={designLength}
        onChangeText={(text) => validateFloatInput(text, setDesignLength)}
        keyboardType="numeric"
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleCalculate} style={styles.button}>
        Calculate
      </Button>

      {/* Add the Reset button */}
      <Button mode="outlined" onPress={handleReset} style={styles.button}>
        Reset
      </Button>

      {/* Add a new button for sending email */}
      <Button mode="contained" onPress={handleSendEmail} style={styles.button}>
        Send Email
      </Button>

      {result !== null && (
        <Card style={{ marginTop: 16, padding: 16 }}>
          <Text variant="titleLarge">Result:</Text>
          <Text variant="bodyLarge">
            Actual Toe Level: {result.actualToeLevel?.toFixed(2)} RLm/mSHD
          </Text>
          <Text variant="bodyLarge">
            Actual Pile Length: {result.actualPileLength?.toFixed(2)} m
          </Text>
          <Text variant="bodyLarge">
            Penetration Depth: {result.penetrationDepth?.toFixed(2)} m
          </Text>
          <Text variant="bodyLarge">
            Percentage Difference: {result.percentageDifference?.toFixed(2)} %
          </Text>

          {/* Include the EmailComposer component with the entire result object */}
          {emailReady && <EmailComposer resultValues={result} />}
        </Card>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: "100%",
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
