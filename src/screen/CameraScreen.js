// src/components/CameraScreen.js
import React, { useEffect, useRef, useState } from "react";
import { View, Text, Button, Image, Alert } from "react-native";
import { Camera } from "expo-camera";
import { FAB } from "react-native-paper";
import * as MediaLibrary from "expo-media-library";
const CameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null); //stores the camera permission status
  const [capturedPhoto, setCapturedPhoto] = useState(null); //stores the URI of a captured photo
  const cameraRef = useRef(null);
  //useEffect hook will request camera permission and it also
  //checks if the camera permission is granted and updates the hasCameraPermission state
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);
  //this function will be called once we go to camera tab
  //checks if camera permission is granted and if the camera is ready
  const handleTakePhoto = async () => {
    if (hasCameraPermission && cameraRef.current) {
      try {
        //if permission is granted, we take a photo usign takePictureAsync
        const { uri } = await cameraRef.current.takePictureAsync();
        //after taking photo, it updates capturedPhoto state with the photo's URI
        setCapturedPhoto(uri);
      } catch (error) {
        console.error("Error taking photo:", error);
      }
      //this will be called if permission is not granted
    } else {
      Alert.alert(
        "Camera Permission",
        "Please grant camera permission in settings.",
        [{ text: "OK" }]
      );
    }
  };
  //this will be called once save button is pressed after taking a photo
  const handleSaveToGallery = async () => {
    if (capturedPhoto) {
      try {
        //checks if there is a captured photo in capturedPhoto
        //and if a photo is available it will save to the device's gallery
        await MediaLibrary.saveToLibraryAsync(capturedPhoto);
        Alert.alert("Success", "The photo has been saved to your gallery.", [
          { text: "OK" },
        ]);
        //this error will be called for some unforseen errors i.e if device's storage space is not enough to save an image
      } catch (error) {
        console.error("Error saving photo to gallery:", error);
      }
      //if there is no photo available to save
    } else {
      Alert.alert("Error", "No photo to save. Please take a photo first.", [
        { text: "OK" },
      ]);
    }
  };
  //this return includes conditional rendering based on:
  //granted camera permissions
  //whether a photo is captured
  //it renders either the camera view or the captured photo view, along with buttons for saving/deleting photo
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
          {/* conditional rendering */}
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