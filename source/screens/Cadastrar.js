import * as React from 'react';
import { Button, View, Text } from 'react-native';

function Cadastrar ({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Cadastrar ração</Text>
        {/* <Button
          title="Ir para tela principal"
          onPress={() => navigation.navigate('Home')}
        /> */}
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  
  export default Cadastrar;