import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import Cards from '../components/Cards';

function Home ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Rações</Text>
      <Cards/>
      <Button
        title="Ir para tela de cadastrar"
        onPress={() => navigation.navigate('Cadastrar')}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  titulo: {
    color: "tomato",
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 35,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 40
},
})