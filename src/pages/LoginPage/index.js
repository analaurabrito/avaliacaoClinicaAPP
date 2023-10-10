import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Link } from 'react-native';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function LoginPage() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cabecalho}>
          <Text style={styles.textoCabecalho}>MedCenter</Text>
          <Image style={styles.image} source={require('../../../assets/item1.jpg')}></Image>
        </View>
        <View style={styles.content}>
          <Text style={styles.titulo}>Bem Vindo!</Text>
          <Text style={styles.subtitulo}>Faça login para continuar</Text>
          <TextInput style={styles.input} placeholder='E-mail' autoCorrect={false} onChange={()=>{}} />
          <TextInput style={styles.input} placeholder='Senha' autoCorrect={false} onChange={()=>{}} />
          <Link to={{screen: 'FPasswordPage'}} style={styles.forgetPass}>Esqueci minha senha</Link>
          
          <View style={styles.botoes}>
              <TouchableOpacity style={styles.botaoLogin}>
                  <Text style={styles.textoBotao}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botaoRegister}>
                  <Text style={styles.textoBotao}>Cadastre-se</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}


