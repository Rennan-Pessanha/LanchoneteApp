import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home/index'; // Caminho correto para o Home.js
import Cardapio from './Card/Card'; // Caminho correto para o Card.js
import Cadastro from './Cadastrar/Cadastro'; // Caminho correto para o Cadastro.js

const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cardapio" component={Cardapio} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}
