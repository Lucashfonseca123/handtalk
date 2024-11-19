import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  textInput: {
    height: 40,
    borderColor: '#AAAAAA',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5, // Para bordas arredondadas (opcional)
  },
  title: {
    fontSize: 16, fontWeight: '700', textAlign: 'center', marginBottom: 16,
  },
  scaffold: {
    paddingHorizontal: 16, justifyContent: 'center', alignContent: 'center', flex: 1,
  },
});
