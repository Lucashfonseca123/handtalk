import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../features/auth/screens/loginScreen';
import RenderScreen from '../features/rendering/screens/renderScreen';
import { RootStackNavigationProps, RootStackParamList } from './interface';
import ConfigurationScreen from '../features/configuration/screens/configurationScreen';
import { useAuth } from '../hooks/auth';
import ButtonHeader from './components/buttonHeader';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    const {navigate} = useNavigation<RootStackNavigationProps>();
    const {logout} = useAuth();
    return(
         <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
                    title: 'Login', headerTitleAlign: 'center',
                }}
                />
            <Stack.Screen name="RenderScreen" component={RenderScreen} options={{
                    title: 'Renderização', headerTitleAlign: 'center',
                    headerLeft: () => <ButtonHeader title="Config" onPressIn={() => navigate('ConfigurationScreen')} />,
                    headerRight: () => <ButtonHeader title="Logout" onPressIn={() => logout()} />,
                }}
            />
            <Stack.Screen name="ConfigurationScreen" component={ConfigurationScreen} options={{
                    title: 'Configurações', headerTitleAlign: 'center',
                     headerRight: () => <ButtonHeader title="Logout" onPressIn={() => logout()} />,
                }}
            />
         </Stack.Navigator>
  );
}
