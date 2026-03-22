import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { CartProvider } from './src/context/CartContext';
import AuthNavigator from './src/navigation/AuthNavigator';
import AppNavigator from './src/navigation/AppNavigator';

// RootNavigator decides which navigator to show based on login state
const RootNavigator = () => {
  const { user } = useAuth();
  // If user is logged in, show the main app. Otherwise show login/register.
  return user ? <AppNavigator /> : <AuthNavigator />;
};

export default function App() {
  return (
    // AuthProvider and CartProvider wrap everything so all screens can use context
    <AuthProvider>
      <CartProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  );
}
