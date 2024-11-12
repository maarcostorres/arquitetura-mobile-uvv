import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const avaliar = [
    { grupo: 'Axis Team', assunto: 'Gerenciador de Gestão Empresarial' },
    { grupo: 'Mentor Amigo', assunto: 'Ensino e Educação a distancia e online' },
    { grupo: 'ODWHEELS', assunto: 'Acessibilidade Odontologica para baixo financeiro' },
    { grupo: 'VadeIn', assunto: 'Serviço de Advocacia e burocratica a distancia' },
  ];

  const handleLogout = () => {
    // Navega para a tela Login e reseta a pilha de navegação
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <ImageBackground source={require('../../assets/back.gif')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Selecione um grupo para realizar.</Text>

        {/* Exibindo os grupos e o botão de avaliar */}
        {avaliar.map((avaliador, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text style={styles.grupo}>Grupo: {avaliador.grupo}</Text>
                <Text style={styles.assunto}>Tema: {avaliador.assunto}</Text>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Avaliações</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={styles.buttonContainer}>
          <Button title="Sair" onPress={handleLogout} />
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
    textAlign: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#fffff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  grupo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  assunto: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '100%',
  },
});
