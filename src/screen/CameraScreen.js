// src/components/CameraScreen.js
import React, { useEffect, useRef, useState } from "react";
import { View, Text, Button, Image, Alert } from "react-native";
import { Camera } from "expo-camera";
import { FAB } from "react-native-paper";
import * as MediaLibrary from "expo-media-library";
const CameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const cameraRef = useRef(null);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);
  const handleTakePhoto = async () => {
    if (hasCameraPermission && cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        setCapturedPhoto(uri);
      } catch (error) {
        console.error("Error taking photo:", error);
      }
    } else {
      Alert.alert(
        "Camera Permission",
        "Please grant camera permission in settings.",
        [{ text: "OK" }]
      );
    }
  };
  const handleSaveToGallery = async () => {
    if (capturedPhoto) {
      try {
        await MediaLibrary.saveToLibraryAsync(capturedPhoto);
        Alert.alert("Success", "The photo has been saved to your gallery.", [
          { text: "OK" },
        ]);
      } catch (error) {
        console.error("Error saving photo to gallery:", error);
      }
    } else {
      Alert.alert("Error", "No photo to save. Please take a photo first.", [
        { text: "OK" },
      ]);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      {capturedPhoto ? (
        <View style={{ flex: 1 }}>
          <Image source={{ uri: capturedPhoto }} style={{ flex: 1 }} />
          <FAB
            style={{ position: "absolute", margin: 16, left: 0, bottom: 0 }}
            icon="content-save"
            onPress={handleSaveToGallery}
          />
          <FAB
            style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
            icon="delete"
            onPress={() => setCapturedPhoto(null)}
          />
        </View>
      ) : hasCameraPermission === null ? (
        <Text>Requesting camera permission...</Text>
      ) : hasCameraPermission === false ? (
        <Text>
          Camera permission denied. Please grant permission in settings.
        </Text>
      ) : (
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.back}
          ref={cameraRef}
        >
          <FAB
            style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
            icon="camera"
            onPress={handleTakePhoto}
          />
        </Camera>
      )}
    </View>
  );
};

export default CameraScreen;
