import React, { useState } from "react";
import { Button, Pressable,  Switch, Text, TextInput, View } from "react-native";

function HomeScreen() {

  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState("");
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  function press() {
    alert("Button Pressed!");
  }
  return (
    <View>
      {/* {
        [...Array(30)].map((_, i) => {
          return <Text key={i} style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
          }}>Home Screen {i + 1}</Text>
        })
      } */}
      <Pressable onPress={() => {
        console.log("Pressed");
      }}>
        <Text style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
        }}>Home Screen</Text>
      </Pressable>


      <Button title="Press me" onPress={press} />

      <TextInput
        multiline
        keyboardType="numeric"
        value={value}
        onChangeText={(text) => {
          console.log(text);
          setValue(text);
        }}

        style={{ borderWidth: 1 }} />
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>

  );
}


export default HomeScreen;
