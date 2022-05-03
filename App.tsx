import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";
import { useRef } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        resizeMode="contain"
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
});
