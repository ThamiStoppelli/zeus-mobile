//import { } from "phosphor-react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button } from "react-native";
import api from '../services/api';

const FormInput = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  
  async function handleSubmit() {
    const data = {name, price, amount, description}
    console.log(data)

    const cadastrar = await api.post("/food/create", data)
    .then( (cadastrar) => { 
      alert("Ração cadastrada com sucesso");
      setName("")
      setPrice("")
      setAmount("")
      setDescription("")
    })
      .catch(function (error) {
        alert("Preencha os campos obrigatórios para cadastrar");
        console.log(error); // Network Error
      });
  }


  return (
    <SafeAreaView style={styles.tela}>

      <Text style={styles.label}>Marca da ração:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da marca"
        onChangeText={(name)=>setName(name)}
        value={name}
        keyboardType="default"
        maxLength={20}
      />
      <Text style={styles.label}>Preço(R$):</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço em reais"
        onChangeText={(price)=>setPrice(price)}
        value={price}
        keyboardType="numeric"
        maxLength={8}
      />
      <Text style={styles.label}>Quantidade(kg):</Text>
      <TextInput
        style={styles.input}
        placeholder="Quantidade em quilogramas"
        onChangeText={(amount)=>setAmount(amount)}
        value={amount}
        keyboardType="numeric"
        maxLength={6}
      />
      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(description)=>setDescription(description)}
        value={description}
        keyboardType="default"
        maxLength={140}
      />
      <Button onPress={() => handleSubmit()} title="Cadastrar"/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    marginLeft: 12
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default FormInput;