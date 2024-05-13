import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Cardapio = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        {/* Imagem de capa (exemplo) */}
        <Image source={require('../../../assets/Burger.jpeg')} style={styles.coverImage} />

        {/* Título da seção */}
        <Text style={styles.sectionTitle}>Categorias de Comida</Text>
        <Text style={styles.sectionTitle}>----------------------------</Text>

        <Text style={styles.sectionTitle}>Burguers</Text>
        {/* Lista de categorias (exemplo) */}
        <View style={styles.categoryContainer}>

          {/* Categoria 1 (exemplo) */}
          <View style={styles.category}>
            <Image source={require('../../../assets/Lanche1.jpeg')} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>Combo fritas e refri</Text>
          </View>

          {/* Categoria 2 (exemplo) */}
          <View style={styles.category}>
            <Image source={require('../../../assets/Lanche2.jpeg')} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>Hambuerguer</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Fritas</Text>
        {/* Lista de categorias (exemplo) */}
        <View style={styles.categoryContainer}>

          {/* Categoria 1 (exemplo) */}
          <View style={styles.category}>
            <Image source={require('../../../assets/Lanche4.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>Fritas com Ketchup</Text>
          </View>

          {/* Categoria 2 (exemplo) */}
          <View style={styles.category}>
            <Image source={require('../../../assets/Fritas.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>Fritas</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Bebidas</Text>
        {/* Lista de categorias (exemplo) */}
        <View style={styles.categoryContainer}>

          {/* Categoria 1 (exemplo) */}
          <View style={styles.category}>
            <Image source={require('../../../assets/Shake1.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>Milkshake de ovomaltine</Text>
          </View>

          {/* Categoria 2 (exemplo) */}
          <View style={styles.category}>
            <Image source={require('../../../assets/Shake2.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>Milkshake de Morango</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#00008b',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  coverImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginleft: '20px',
  },
  category: {
    width: '48%',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  },
  categoryImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Cardapio;
