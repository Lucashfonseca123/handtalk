import React, { useCallback, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useAuth } from '../../../../hooks/auth';
import { styles } from './styles';

const LoginScreen = () => {
    const {login} = useAuth();
    const [email, setEmail] = useState('ht@gmail.com');
    const [password, setPassword] = useState('handstalk');

    const handlePress = useCallback(() => {
        login(email, password);
    }, [email, password, login]);

    return (
       <View style={styles.scaffold}>
        <Text style={styles.title}>Faça o seu login</Text>
         <TextInput
            style={styles.textInput}
            placeholder="Entre com seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
        />
        <Button title="Login" onPress={handlePress} />
        {/* Bloco com funcionalidades do firebase */}
        {/*<Button title="Create Data" onPress={() => createData({})} />
        <Button title="Create Account" onPress={() => createAccount('ht2@gmail.com', 'handstalk')} /> */}
       </View>
    );
};



export default LoginScreen;
