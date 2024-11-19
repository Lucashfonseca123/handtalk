import React, { useEffect, useState } from 'react';
import {Button, ScrollView, Text, View} from 'react-native';

import DefaultShapeConfig from '../../components/defaultShapeConfig';
import { IConfig, useConfig } from '../../../../hooks/config';
import { useAuth } from '../../../../hooks/auth';
import { styles } from './styles';

const ConfigurationScreen = () => {
    const configObjDefault: IConfig = {
        objectCone: {shape: 'cubo', rotation: 'esquerda'},
        objectCube: {shape: 'cubo', rotation: 'esquerda'},
        objectDodecahedron: {shape: 'cubo', rotation: 'esquerda'},
    };
    const {user: { id}} = useAuth();
    const {config, saveConfig, listenData} = useConfig();
    const [configObjects, setConfigObjects] = useState<IConfig>({
        objectCube: config?.objectCube ?? configObjDefault.objectCube,
        objectCone: config?.objectCone ?? configObjDefault.objectCone,
        objectDodecahedron: config?.objectDodecahedron ?? configObjDefault.objectDodecahedron,
    });

     useEffect(() => {
        listenData(id ?? '');
    }, [id, listenData]);

    const handleSubmitConfig = () => {
        saveConfig(configObjects ?? {}, id ?? '');
    };

    return(
        <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Selecione as configurações dos 3 ítens</Text>
            <Text style={styles.subTitle}>Cubo</Text>
            <DefaultShapeConfig
            object={configObjects.objectCube}
                shape={(shape) => {
                    setConfigObjects({...configObjects, objectCube: {...configObjects?.objectCube, shape}});
                }}
                color={(color) => { setConfigObjects({...configObjects, objectCube: {...configObjects?.objectCube, color}});
                }}
                rotation={(rotation) =>  {setConfigObjects({...configObjects, objectCube: {...configObjects?.objectCube, rotation}});
            }} />
            <View style={styles.spaceBottom} />
            <Text style={styles.subTitle}>Cone</Text>
            <DefaultShapeConfig
             object={configObjects.objectCone}
                shape={(shape) => {
                    setConfigObjects({...configObjects, objectCone: {...configObjects?.objectCone, shape}});
                }}
                color={(color) => { setConfigObjects({...configObjects, objectCone: {...configObjects?.objectCone, color}});
                }}
                rotation={(rotation) =>  {setConfigObjects({...configObjects, objectCone: {...configObjects?.objectCone, rotation}});
            }} />
            <View style={styles.spaceBottom} />
            <Text style={styles.subTitle}>Dodecaedro</Text>
            <DefaultShapeConfig
             object={configObjects.objectDodecahedron}
                shape={(shape) => {
                    setConfigObjects({...configObjects, objectDodecahedron: {...configObjects?.objectDodecahedron, shape}});
                }}
                color={(color) => { setConfigObjects({...configObjects, objectDodecahedron: {...configObjects?.objectDodecahedron, color}});
                }}
                rotation={(rotation) =>  {setConfigObjects({...configObjects, objectDodecahedron: {...configObjects?.objectDodecahedron, rotation}});
            }} />
            <View style={styles.spaceBottom} />

            <Button title="Salvar" onPress={handleSubmitConfig} />
                <View style={styles.spaceBottom} />
            </ScrollView>
    );
};

export default ConfigurationScreen;
