import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

export default function ForgotPasswordScreen({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/back.gif')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Recupere a sua senha</Text>
        <TextInput placeholder="Email" style={styles.input} />
        <View style={styles.buttonContainer}>
          <Button title="Recuperar Senha" onPress={() => navigation.navigate('Login')} />
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
