import React from 'react';

import {AuthProvider} from './auth';
import { ConfigProvider } from './config';
import { NavigationContainer } from '@react-navigation/native';

const AppProvider = ({ children }) => {
  return (
       <NavigationContainer>
        <ConfigProvider>
          <AuthProvider>
              {children}
          </AuthProvider>
          </ConfigProvider>
      </NavigationContainer>
  );
};

export default AppProvider;
