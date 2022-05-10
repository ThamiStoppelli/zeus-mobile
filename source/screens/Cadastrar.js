import * as React from 'react';
import { Button, View, Text, StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';
import FormInput from '../components/FormInput';
//keyboard ta cobrindo o input de descrição

export default function Cadastrar ({ navigation }) {
    return (
      <View style={styles.tela}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position" enabled>
            <>
              <Text style={styles.titulo}>Cadastrar ração</Text>
              {/* <FormInput/> */}
              {/* <Button
                title="Ir para tela principal"
                onPress={() => navigation.navigate('Home')}
              /> */}
              <FormInput/>
              <Button title="Voltar" onPress={() => navigation.goBack()} />
            </>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    );
  }
  
const styles = StyleSheet.create({
    tela: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'top' },
    titulo: {
        color: "tomato",
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 35,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 40
    },
});