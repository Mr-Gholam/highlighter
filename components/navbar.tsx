import { SetStateAction, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function Navbar(props: { title?: SetStateAction<string> }) {
  const [pageTitle, changePageTitle] = useState("Highlighter");
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.nav}>
        <Text>123</Text>
        <Text style={styles.title}>{pageTitle}</Text>
        <Text>...</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    marginTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  safe: {
    paddingTop: 10,
    // backgroundColor: "",
  },
  title: {
    // marginTop: 20,
    fontSize: 16,
  },
});
