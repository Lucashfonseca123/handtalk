import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { useConfig } from '../../hooks/config';

const Dodecahedron = () => {
    const {config} = useConfig();
    return (
      <View>
        <Text style={styles.label}>Esse é o componente Dodecaedro</Text>
        <Text style={styles.labelSmall}>Valores salvos</Text>
        <Text style={styles.labelSmall}>Shape: {config?.objectDodecahedron?.shape ?? 'Não há valores'}</Text>
        <Text style={styles.labelSmall}>Cor: {config?.objectDodecahedron?.color  ?? 'Não há valores'}</Text>
        <Text style={styles.labelSmall}>Rotação: {config?.objectDodecahedron?.rotation  ?? 'Não há valores'}</Text>
      </View>
        //  <Canvas camera={{ position: [-2, 2.5, 5], fov: 30  }}>
        //   <mesh>
        //     <dodecahedronGeometry args={[1, 1]}  />
        //     <meshStandardMaterial color="orange" />
        //   </mesh>
        // </Canvas>
    );
};

export default Dodecahedron;
