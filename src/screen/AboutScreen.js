// src/components/AboutScreen.js
import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
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
            the stakeholders.
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="How to Use" />
        <Card.Content>
          <Text variant="bodyLarge">
            1. Take a photo of the pile installation site for record.{"\n"}
            2. Enter the following values:{"\n"}- Casing Top Level (measured
            with an Auto Level on site){"\n"}- Ground Level (measured with an
            Auto Level on site){"\n"}- Cut Off Level (obtained from design
            drawings){"\n"}- Design Pile Length (obtained from design drawings)
            {"\n"}- Length from CTL (measured on site with a tape measure){"\n"}
            3. Hit "Calculate" to compute the pile installation data.{"\n"}
            4. Review the calculated results and share them with stakeholders if
            needed.
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Card.Title title="Developed by:" />
          <Text variant="bodyLarge">
            Tan Bingquan, Regino Deang Jr & Jackson Loh
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
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
