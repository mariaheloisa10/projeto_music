import * as React from 'react'
import { View, Text, StyleSheet, Button, TextInput, Image} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function AboutScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params?.name

  const handleHomeClick = () => {
    navigation.goBack()
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Novidades aqui temos! </Text>

      <TextInput style={styles.input}
        placeholder='Que tipos de musica você deseja escutar?'
        value={name}
        onChangeText={t=>setName(t)}
      />
      <Image style={styles.img1} source={require('./img/logo.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -600,
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold'
  },
   input: {
    width: 320,
    padding: 10,
    marginVertical: 5,
    borderRadius: 16,
    fontSize: 15,
    color: '#fff',
    backgroundColor: '#ddd',
  },
  h1: {
    color: '#000',
    fontSize: 19,
    paddingVertical: 10,
  },
})