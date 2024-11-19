import React from 'react';
import {Text, View} from 'react-native';
import { useAuth } from '../../../../hooks/auth';

import { Cube, Cone, Dodecahedron } from '../../../../components';
import { styles } from './styles';

const RenderScreen = () => {
    const {user} = useAuth();

    return (
      <View style={styles.scaffold}>
        <Text style={styles.userText}>{`Usuário: ${user.email}`}</Text>
        <View style={styles.wrapperShapes}>
      <Cube />
      <Cone />
      <Dodecahedron />
      </View>

      </View>
    );
};

export default RenderScreen;
