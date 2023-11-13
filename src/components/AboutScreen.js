// src/components/AboutScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="About the App" />
        <Card.Content>
          <Text variant="bodyLarge">
            • This app is designed to compute pile drilling record.{" "}
          </Text>
          <Text variant="bodyLarge">
            • User can compute the value then choose to email the stakeholder
            like a professional engineer.
          </Text>
          <Text variant="bodyLarge">
            • User can also take a picture of the site data and share it with
            the stakeholder.
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge">Developed by:</Text>
          <Text variant="bodyMedium">
            Tan Bingquan, Regino Deang Jr & Jackson Loh
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default AboutScreen;
