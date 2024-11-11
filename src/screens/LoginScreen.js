import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/back.gif')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao avaliador de Grupos do INOVAWEEK!</Text>
        <TextInput placeholder="Matricula" style={styles.input} />
        <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
        <View style={styles.buttonContainer}>
          <Button title="Entrar" onPress={() => navigation.navigate('Home')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Cadastrar" onPress={() => navigation.navigate('Register')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Esqueceu sua senha?" onPress={() => navigation.navigate('ForgotPassword')} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
    width: '100%', 
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    alignSelf: 'center', 
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.5)',
    padding: 10,
    marginVertical: 10,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '100%',
  },
});
