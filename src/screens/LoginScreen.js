import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  // Credenciais permitidas para acesso
  const CREDENCIAIS = {
    matricula: '202405406', // Matrícula permitida
    senha: 'tocomfome', // Senha permitida
  };

  const handleLogin = () => {
    // Limpar qualquer erro anterior
    setError('');

    // Verificar se a matrícula e senha estão corretas
    if (matricula === CREDENCIAIS.matricula && senha === CREDENCIAIS.senha) {
      // Navega para a tela Home ao fazer login com sucesso
      navigation.navigate('Home');
    } else {
      // Exibe mensagem de erro
      setError('Matrícula ou senha incorreta');
    }
  };

  return (
    <ImageBackground source={require('../../assets/back.gif')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao avaliador de Grupos do INOVAWEEK!</Text>
        
        <TextInput
          placeholder="Matricula"
          style={styles.input}
          value={matricula}
          onChangeText={setMatricula}
          autoCapitalize="none"
        />
        
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <View style={styles.buttonContainer}>
          <Button title="Entrar" onPress={handleLogin} />
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
  errorText: {
    color: 'red',
    marginVertical: 10,
    textAlign: 'center',
  },
});
