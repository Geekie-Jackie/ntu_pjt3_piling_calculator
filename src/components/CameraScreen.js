// src/components/CameraScreen.js
import React from 'react';
import { View, Button } from 'react-native';
import { Camera } from 'expo-camera';
import { FAB } from 'react-native-paper';

const CameraScreen = () => {
  const handleTakePhoto = async () => {
    // Implement logic to take a photo using Expo Camera
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} />
      <FAB
        style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
        icon="camera"
        onPress={handleTakePhoto}
      />
    </View>
  );
};

export default CameraScreen;