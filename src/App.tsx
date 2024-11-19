import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import AppContainer from './hooks';

const App = () => {
  return(
    <AppContainer>
       <RootNavigator />
    </AppContainer>
  );
};

export default App;
