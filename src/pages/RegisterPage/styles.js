import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
    },

    card: {
        height: '70%',
        width: '90%',
        border: '15px', 
        backgroundColor: '#181818',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: '10px',
        paddingBottom: '20px',
    },

    cabecalho: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%',
        marginTop: '30px',
    },

    textoCabecalho: {
        color: '#afaead',
        fontSize: '8px',
        fontWeight: 'bold',
    },

    image: {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
    },

    content: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    titulo:{
        color: '#afaead',
        fontSize: '20px',
        fontWeight: 'bold',
        letterSpacing: '1px',
    },

    subtitulo: {
        color: '#afaead',
        width: '70%',
        marginBottom: '20px',
        textAlign: 'justify',
    },

    campoNomes: {
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px'
    },

    input: {
        backgroundColor: '#404040',
        width: '75%',
        marginBottom: '15px',
        color: '#858585',
        fontSize: '14px',
        borderRadius: '7px',
        padding: '15px',
        justifyContent: 'center',

    },

    inputNomes: {
        backgroundColor: '#404040',
        width: '48%',
        marginBottom: '15px',
        color: '#858585',
        fontSize: '14px',
        borderRadius: '7px',
        padding: '15px',
        justifyContent: 'center',

    },

    obs: {
        color: '#afaead',
        fontSize: '9px',
        width: '70%',
        marginBottom: '20px',
        textAlign: 'justify',
    },

    botaoRegister: {
        backgroundColor: '#319997',
        width: '75%',
        height: '45px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '7px',
        fontSize: '18px',
        marginTop: '15px',
    },

    textoBotao: {
        fontWeight: 'bold',
        color: 'black',
        letterSpacing: '1px',
    },
  });

export default styles;

