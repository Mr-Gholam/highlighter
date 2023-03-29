import { SetStateAction, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

// todo safeareaview add

export default function Navbar(props: { title?: SetStateAction<string> }) {
  const [pageTitle, changePageTitle] = useState("Highlighter");
  return (
    <View>
      <SafeAreaView>
        <View style={styles.nav}>
          <Text>---</Text>
          <Text style={styles.title}>{pageTitle}</Text>
          <Text>...</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    width: "70%",
  },
});
