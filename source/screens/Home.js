import * as React from 'react';
import { Button, View, Text } from 'react-native';

function Home ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Rações</Text>
      <Button
        title="Ir para tela de cadastrar"
        onPress={() => navigation.navigate('Cadastrar')}
      />
    </View>
  );
}

export default Home;