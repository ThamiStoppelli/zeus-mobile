import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import api from '../services/api';

// function Card ({ title, price }) {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>Nome: {title}</Text>
//       <Text>Preço: {price} </Text>
//     </View>
//   );
// } 

function Card ({ name, price, amount }) {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>Nome: {name}</Text>
      <Text>Preço: R$ {price} </Text>
      <Text>Quantidade: {amount} kg </Text>
    </View>
  );
} 

const Cards = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    loadData();
  }, [])

  async function loadData() {
    const response = await api.get('/food/list')
    console.log(response)
    setData(response.data)
  }

  // const renderItem = ({ item }) => (
  //   <Item title={item.title} />
  //   <Item price={item.price} />
  // );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList contentContainerStyle={{ paddingBottom: 60 }}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Card name={item.name} price={item.price} amount={item.amount} ></Card>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    
  },
  item: {
    backgroundColor: 'tomato',
    //cfcdc8
    width: 300,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8
  },
  title: {
    fontSize: 16,
    color: 'white'
  },
});

export default Cards;