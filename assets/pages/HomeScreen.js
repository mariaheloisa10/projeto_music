import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation()


  const handleAboutClick = () => {
    navigation.navigate('About', {name: name})
   
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./img/logo.png')}/>
      <Text style={styles.h1}>Sistema de Login</Text>
      <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>
      
      <TextInput style={styles.input} 
      placeholder='Digite seu e-mail'
      value={email}
      onChangeText={t=>setEmail(t)}
      />

      <TextInput style={styles.input}
      placeholder='Digite sua senha'
      value={password}
      onChangeText={t=>setPassword(t)}
      />
      <Button title='Enviar' onPress={handleAboutClick} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    padding: 10,
    marginVertical: 10,
    borderRadius: 16,
    fontSize: 15,
    color: '#fff',
    backgroundColor: '#ddd',
  },
  logo: {
    width: 100,
    height: 100,
    fontSize: 15,
    marginTop: -300,
  },
  h1: {
    color: '#000',
    fontSize: 27,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  h2: {
    color: '#777',
    fontSize: 15,
  },
})