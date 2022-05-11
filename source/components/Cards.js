import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import api from '../services/api';

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '1a ração',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '2a ração',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '3a ração',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Cards = () => {

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   loadData();
  // }, [])

  // async function loadData() {
  //   const response = await api.get('/food/list')
  //   console.log(response)
  //   setData(response.data)
  // }
//usar map?

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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