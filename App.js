// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigator from './src/navigation/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
