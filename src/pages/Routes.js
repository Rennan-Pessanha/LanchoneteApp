import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home/index'; // Caminho correto para o Home.js
import Cardapio from './Card/Card'; // Caminho correto para o Card.js
import Cadastro from './Cadastrar/Cadastro'; // Caminho correto para o Cadastro.js

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Cardapio" component={Cardapio} options={{ headerShown: false }} />
      <Tab.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
