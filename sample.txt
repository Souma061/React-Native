import React, { useState } from "react";
import { Button, FlatList, Image, ImageBackground, Pressable, Switch, Text, TextInput, View } from "react-native";




const data = [
  { id: "1", name: "John" },
  { id: "2", name: "Jane" },
  { id: "3", name: "Bob" },
  { id: "4", name: "Alice" },
]
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

      < Image
        style={{ width: 50, height: 50, marginTop: 20, marginLeft: 20 }}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
      <ImageBackground
        source={{ uri: 'https://picsum.photos/seed/picsum/400/400' }}
        imageStyle={{ resizeMode: 'cover' }}
        style={{
          width: 200,
          height: 200,
          marginTop: 20,
          marginLeft: 20,
          overflow: 'hidden'  // important on iOS
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Image Background
        </Text>
      </ImageBackground>

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

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
        ListHeaderComponent={<Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginTop: 20 }}>Names</Text>}
        ListEmptyComponent={<Text>No names available.</Text>}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: "gray" }} />}
        onRefresh={() => console.log("Refreshing...")}
        refreshing={false}
      />
    </View>

  );
}


export default HomeScreen;
