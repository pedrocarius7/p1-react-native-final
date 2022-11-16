import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

export const Login = () => {

return (
    <View style={styles.container}>
  
      <Image
        source={require('../assets/owwww.png')}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Email ou nome de usuário:"
        />

        <TextInput
        style={styles.input}
        placeholder="Senha:"
        secureTextEntry= {true}
        />

        <TouchableOpacity 
          style={styles.botao}
          onClick={ () => {this.props.navigation.navigate('Home')} }
        >
          <Text style={styles.botaoText}>Jogar!</Text>
          </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  
    logo: {
      width: 150,
      height: 150,
      borderRadius: 100
    },
  
    input: {
      marginTop: 10,
      padding: 10,
      width: 300,
      backgroundColor: 'orange',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 3,
      color: 'black'
    },
  
    botao: {
      width: 150,
      height: 40,
      backgroundColor: '#3498db',
      marginTop: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    botaoText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff'
    }
    
  });