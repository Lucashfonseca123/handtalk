/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Button, Modal, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import ColorPicker, { Panel1, Preview, HueSlider} from 'reanimated-color-picker';
import { IObject } from '../../../../hooks/config';
import { styles } from './styles';

interface IDefaultShapeConfig {
    object: IObject;
    shape(shape: string): void;
    rotation(rotation: string): void;
    color(color: string): void;
}

const DefaultShapeConfig = ({object: {
        color: objectColor,
        rotation: objectRotation,
        shape: objectShape},
        shape, rotation, color}: IDefaultShapeConfig) => {

    const [selectedShape, setSelectedShape] = useState(objectShape ?? '');
    const [selectedRotation, setSelectedRotation] = useState(objectRotation ?? '');
    const [selectedColor, setSelectedColor] = useState(objectColor);
    const [showModal, setShowModal] = useState(false);

    const onSelectColor = ({ hex }) => {
        setSelectedColor(hex);
        color(hex);
    };

    return(
        <View style={styles.container}>
             <Text style={styles.subTitle}>Tipo do objeto</Text>
         <Picker
                selectedValue={selectedShape}
                onValueChange={(itemValue) =>
                {
                    shape(itemValue);
                    setSelectedShape(itemValue);
                }
            }>
                <Picker.Item label="Cone" value="cone" />
                <Picker.Item label="Cubo" value="cubo" />
                <Picker.Item label="dodecaedro" value="dodecaedro" />
            </Picker>
            <Text style={styles.subTitle}>Cor do objeto</Text>
            <View style={{paddingTop: 8, paddingHorizontal: 8}}>
                <Button title={`${selectedColor ?? 'Não selecionado'}`} onPress={() => setShowModal(true)} />
            </View>
            <Modal visible={showModal} animationType="slide">
                <ColorPicker style={{ width: '70%' }} value="blue" onComplete={onSelectColor}>
                <Preview />
                <Panel1 />
                <HueSlider />
                </ColorPicker>
                <Button title="Ok" onPress={() => setShowModal(false)} />
            </Modal>
            <Text style={{...styles.subTitle, marginTop: 24}}>Posição do objeto</Text>
            <Picker
                selectedValue={selectedRotation}
                onValueChange={(itemValue, itemIndex) =>
                {
                    setSelectedRotation(itemValue);
                    rotation(itemValue);
                }
            }>
                <Picker.Item label="Esquerda" value="esquerda" />
                <Picker.Item label="Direita" value="direita" />
            </Picker>
        </View>
    );
};

export default DefaultShapeConfig;
