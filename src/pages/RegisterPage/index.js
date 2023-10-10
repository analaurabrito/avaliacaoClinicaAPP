import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function RegisterPage() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cabecalho}>
          <Text style={styles.textoCabecalho}>MedCenter</Text>
          <Image style={styles.image} source={require('../../../assets/logo.png')}></Image>
        </View>
        <View style={styles.content}>
        <Text style={styles.titulo}>Olá!</Text>
        <Text style={styles.subtitulo}>Crie sua conta para acessar nosso consultório.</Text>
        <View style={styles.campoNomes}> 
          <TextInput style={styles.inputNomes} placeholder='Nome' autoCorrect={false} onChange={()=>{}} />
          <TextInput style={styles.inputNomes} placeholder='Sobrenome' autoCorrect={false} onChange={()=>{}} />
          </View>
        <TextInput style={styles.input} placeholder='E-mail' autoCorrect={false} onChange={()=>{}} />
        <TextInput style={styles.input} placeholder='Senha' autoCorrect={false} onChange={()=>{}} />
        <TextInput style={styles.input} placeholder='Confirmar Senha' autoCorrect={false} onChange={()=>{}} />
        <Text style={styles.obs}>Ao me registrar, eu concordo com os Termos e Condições desse serviço.</Text>
        <TouchableOpacity style={styles.botaoRegister}>
          <Link to={{screen: 'LoginPage'}} style={styles.textoBotao}>Cadastre-se</Link>
        </TouchableOpacity>
        </View>
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}

