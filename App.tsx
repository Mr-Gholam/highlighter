import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import Navbar from "./components/navbar";
import RNFS from "react-native-fs";

export default function App() {
  // const [downloadFolder, setDownloadFolder] = useState("");

  return (
    <>
      <Navbar title="test3" />
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
  },
});
