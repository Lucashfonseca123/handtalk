import React from 'react';
// import {Canvas} from '@react-three/fiber/native';
import {  Text, View } from 'react-native';
import { styles } from './styles';
import { useConfig } from '../../hooks/config';

const Cube = () => {
  const {config} = useConfig();
    return (
      <View>
        <Text style={styles.label}>Esse é o componente Cubo</Text>
        <Text style={styles.labelSmall}>Valores salvos</Text>
        <Text style={styles.labelSmall}>Shape: {config?.objectCube?.shape ?? 'Não há valores'}</Text>
        <Text style={styles.labelSmall}>Cor: {config?.objectCube?.color  ?? 'Não há valores'}</Text>
        <Text style={styles.labelSmall}>Rotação: {config?.objectCube?.rotation  ?? 'Não há valores'}</Text>
      </View>
        //    <Canvas camera={{ position: [-2, 2.5, 5], fov: 30  }}>
        //   <mesh>
        // <cubeCamera args={[1, 1]}  />
        //     <meshStandardMaterial color="orange" />
        //   </mesh>
        // </Canvas>
    );
};

export default Cube;
