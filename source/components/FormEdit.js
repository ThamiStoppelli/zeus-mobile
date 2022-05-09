import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const FormEdit = () => {
  const [text, onChangeText] = React.useState("Dado inserido");
  const [number, onChangeNumber] = React.useState("22");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="insira o preço em reais"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default FormEdit;