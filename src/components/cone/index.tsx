import React from 'react';
// import {Canvas} from '@react-three/fiber/native';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { useConfig } from '../../hooks/config';

const Cone = () => {
    const {config} = useConfig();
    return (
      <View>
        <Text style={styles.label}>Esse é o componente Cone</Text>
        <Text style={styles.labelSmall}>Valores salvos</Text>
        <Text style={styles.labelSmall}>Shape: {config?.objectCone?.shape ?? 'Não há valores'}</Text>
        <Text style={styles.labelSmall}>Cor: {config?.objectCone?.color  ?? 'Não há valores'}</Text>
        <Text style={styles.labelSmall}>Rotação: {config?.objectCone?.rotation  ?? 'Não há valores'}</Text>
      </View>
        //   <Canvas camera={{ position: [-2, 2.5, 5], fov: 30  }}>
        //   <mesh>
            // <coneGeometry args={[1, 1]}  />
        //     <meshStandardMaterial color="orange" />
        //   </mesh>
        // </Canvas>
    );
};

export default Cone;
