import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function FPasswordPage() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cabecalho}>
          <Text style={styles.textoCabecalho}>MedCenter</Text>
          <Image style={styles.image} source={require('../../../assets/logo.png')}></Image>
        </View>
        <View style={styles.content}>
          <Text style={styles.titulo}>Recuperar senha</Text>
          <Text style={styles.subtitulo}>Insira seu e-mail para receber o link de recuperação na sua caixa de entrada.</Text>
          <TextInput style={styles.input} placeholder='Email' autoCorrect={false} onChange={()=>{}} />
          <TouchableOpacity style={styles.botaoSubmit}>
            <Link to={{screen: 'LoginPage'}} style={styles.textoBotao}>Enviar</Link>
          </TouchableOpacity>
        </View>
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}

