import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
export default function App() {
  const Data = [
    { id: 1, image: require('./assets/1.png'), texto: 'Poste' },
    { id: 2, image: require('./assets/2.png'), texto: 'Lampada' },
    { id: 3, image: require('./assets/3.png'), texto: 'Madeira' },
    { id: 4, image: require('./assets/4.png'), texto: 'Lampada preta' },
    { id: 5, image: require('./assets/5.png'), texto: 'Abajur' },
    { id: 6, image: require('./assets/6.png'), texto: 'Lampada redonda' },
    { id: 7, image: require('./assets/7.png'), texto: 'Poste de praça' },
    { id: 8, image: require('./assets/8.png'), texto: 'Abajur quarto' },

    // Adicione mais itens aqui conforme necessário
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>
      <View style={styles.header}>
        <Text style={styles.bold}>Lighteria</Text>
        <View style={styles.imageSacola}>
          <Image source={require('./assets/sacola.png')} style={styles.icon} />
        </View>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.dashedLine}></View>
        <Text style={styles.categoryText}> Categoria </Text>
        <View style={styles.dashedLine}></View>
      </View>
      <Text style={styles.pontilhado}></Text>
      <FlatList
        data={Data}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <View style={styles.productImageContainer}>
              <Image source={item.image} style={styles.productImage} />
            </View>
            <Text style={styles.productText}>{item.texto}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F2F2F2',
  },
  title: {
    fontSize: 12,
    paddingTop: 10,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bold: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  imageSacola: {
    padding: 13,
    backgroundColor: 'white',
    borderRadius: 30,
    marginRight: 20,
  },
  icon: {
    width: 34,
    height: 34,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  dashedLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#a9a9a9',
    marginLeft: 5,
    marginRight: 5,
  },

  categoryText: {
    fontSize: 16,
    color: '#a9a9a9',
  },
  productContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    padding: 8,
  },

  productImageContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
  },

  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },

  productText: {
    marginTop: 8,
    fontSize: 12,
  },
});
