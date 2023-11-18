// EmailComposer.js
import React from "react";
import { View, Alert } from "react-native";
import * as MailComposer from "expo-mail-composer";

// function to compose the email and ask if user wants to send email
const EmailComposer = ({ resultValues }) => {
  const sendEmail = () => {
    MailComposer.composeAsync({
      recipients: [],
      subject: "Pile Drilling Values",
      body: `Dear Sir/Madam, \n\nThe computed results are as follows:\n\nActual Toe Level: ${resultValues.actualToeLevel?.toFixed(
        2
      )} RLm/mSHD\nActual Pile Length: ${resultValues.actualPileLength?.toFixed(
        2
      )} m\nPenetration Depth: ${resultValues.penetrationDepth?.toFixed(
        2
      )} m\nPercentage Difference: ${resultValues.percentageDifference?.toFixed(
        2
      )} %\n\nRegards,\nXYZ Civil Engineering Pte. Ltd.`,
    });
  };

  const displayEmailQuery = () => {
    Alert.alert(
      "Send Email",
      "Do you want to send the result via email?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Send",
          onPress: () => {
            sendEmail();
          },
        },
      ],
      { cancelable: true }
    );
  };

  return <View>{displayEmailQuery()}</View>;
};

export default EmailComposer;