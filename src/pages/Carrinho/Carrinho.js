import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Carrinho = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [cart, setCart] = useState(route.params.cart);

  const increaseQuantity = (itemId) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const total = cart.reduce((sum, item) => sum + Number(item.preco) * item.quantity, 0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Itens no Carrinho</Text>
      <View style={styles.itemsContainer}>
        {cart.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={item.imagem} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.nome}</Text>
              <Text style={styles.itemPrice}>R$ {Number(item.preco).toFixed(2)}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.itemQuantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
        <Text style={styles.goBackText}>Voltar ao Cardápio</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008b',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    backgroundColor: '#1E90FF',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    width: '45%', // Ajuste a largura para acomodar duas colunas
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemDetails: {
    alignItems: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center', // Ajuste para centralizar o texto
  },
  itemPrice: {
    fontSize: 18,
    color: '#FFD700',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textAlign: 'center', // Ajuste para centralizar o texto
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: '#FFD700',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#000',
  },
  itemQuantity: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  removeButton: {
    marginTop: 10,
  },
  removeButtonText: {
    fontSize: 16,
    color: '#FF6347',
    textDecorationLine: 'underline',
  },
  total: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  goBackButton: {
    marginTop: 20,
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 10,
  },
  goBackText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Carrinho;
