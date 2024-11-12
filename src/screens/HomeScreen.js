import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity, TextInput, FlatList } from 'react-native';
import gruposData from './grupos.json'; // Certifique-se de que o caminho está correto

export default function HomeScreen({ navigation }) {
  const [grupos, setGrupos] = useState([]); // Armazena todos os grupos
  const [filteredGrupos, setFilteredGrupos] = useState([]); // Armazena os grupos filtrados
  const [search, setSearch] = useState(''); // Armazena o termo de pesquisa

  useEffect(() => {
    // Carrega os grupos do JSON e define o estado inicial
    setGrupos(gruposData);
    setFilteredGrupos(gruposData); // Inicialmente, todos os grupos são exibidos
  }, []);

  const handleSearch = (text) => {
    setSearch(text);

    // Filtra os grupos com base no texto de pesquisa
    if (text === '') {
      setFilteredGrupos(grupos); // Se a barra de pesquisa estiver vazia, mostra todos os grupos
    } else {
      const filtered = grupos.filter((grupo) =>
        grupo.grupo.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredGrupos(filtered);
    }
  };

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <ImageBackground source={require('../../assets/back.gif')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Selecione um grupo para realizar.</Text>

        {/* Barra de pesquisa */}
        <TextInput
          style={styles.searchBar}
          placeholder="Pesquisar grupos..."
          value={search}
          onChangeText={handleSearch}
        />

        {/* Exibindo os grupos filtrados como botões */}
        {filteredGrupos.length === 0 ? (
          <Text style={styles.noResultsText}>Nenhum grupo encontrado.</Text>
        ) : (
          <FlatList
            data={filteredGrupos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.groupButton}
                onPress={() => navigation.navigate('DetalhesGrupo', { grupoId: item.id, grupoNome: item.grupo })}
              >
                <Text style={styles.groupButtonText}>{item.grupo}</Text>
              </TouchableOpacity>
            )}
          />
        )}

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
  searchBar: {
    width: '100%',
    padding: 10,
    borderColor: 'rgba(128, 128, 128, 0.5)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  groupButton: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  groupButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '100%',
  },
  noResultsText: {
    fontSize: 16,
    color: '#555',
    marginTop: 20,
    textAlign: 'center',
  },
});
