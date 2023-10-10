import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function MainPage() {
  return (
    <View style={styles.container}>
        <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Bem vindo!</Text>
        <Image style={styles.image} source={require('../../../assets/logo.png')}></Image>
        </View>
      <View style={styles.card}>
      <Text style={styles.titulo2}>Central de Atendimento</Text>
        <Text style={styles.texto}>Esse é o seu espaço dentro da clínica.</Text>
        <TextInput style={styles.input} placeholder='Pesquisar médicos na clínica...' autoCorrect={false} onChange={()=>{}} />
        <View style={styles.opcoes}>
            <View style={styles.opcao1}>
                <Text style={styles.textoOpcoes}>Agendar consulta</Text>
            </View>
            <View style={styles.opcao2}>
                <Text style={styles.textoOpcoes}>Visualizar histórico</Text>
            </View>
        </View>
        <View style={styles.paraVoce}>
            <Text style={styles.titulo3}>Pode ser do seu interesse...</Text>
            <View style={styles.inform1}>
                <Text style={styles.tituloInform}>Cronograma de vacinas</Text>
                <Text style={styles.subInform}>Agende sua data</Text>
            </View>
            <View style={styles.inform2}>
                <Text style={styles.tituloInform}>Atendimento online</Text>
                <Text style={styles.subInform}>Faça uma pergunta ao médico</Text>
            </View>
        </View>
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}