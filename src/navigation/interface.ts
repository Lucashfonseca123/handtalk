import {RouteProp} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  LoginScreen: undefined;
  RenderScreen: undefined;
  ConfigurationScreen: undefined;
};

export type RootStackRouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

export type RootStackNavigationProps = NativeStackNavigationProp<RootStackParamList>;
