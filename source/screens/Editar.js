import * as React from 'react';
import { Button, View, Text } from 'react-native';
import FormEdit from '../components/FormEdit';

function Editar ({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Editar ração</Text>
        <FormEdit/>
        {/* <Button
          title="Ir para tela principal"
          onPress={() => navigation.navigate('Home')}
        /> */}
        <Button title="Voltar" onPress={() => navigation.goBack()} />
        <Button title="Salvar" onPress={() => navigation.goBack()} />

      </View>
    );
  }
  
  export default Editar;