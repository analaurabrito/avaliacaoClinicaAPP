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
        justifyContent: 'center',
        borderRadius: '10px',
        paddingBottom: '20px',
    },

    cabecalho: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%',
        marginBottom: '30px',
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
        fontSize: '25px',
        fontWeight: 'bold',
        letterSpacing: '1px',
        color: '#afaead',
    },

    titulo2: {
        fontSize: '19px',
        fontWeight: 'bold',
        color: '#EFB810',
        marginBottom: '2px',
        textAlign: 'right',
        letterSpacing: '1px',
    },

    texto: {
        marginBottom: '20px',
        color: '#afaead',
        width: '70%',
        textAlign: 'center',
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

    opcoes: {
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px'
    },

    opcao1: {
        backgroundColor: '#EFB810',
        width: '45%',
        height: '100px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '7px',
    },

    opcao2: {
        backgroundColor: '#319997',
        width: '45%',
        height: '100px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '7px',
    },

    textoOpcoes: {
        fontWeight: 'bold',
        color: 'black',
        letterSpacing: '1px',
        textAlign: 'center',
    },

    paraVoce: {
        width: '75%',
        height: '30%',
        justifyContent: 'flex-start',
        marginTop: '30px',
    },

    titulo3: {
        fontSize: '15px',
        fontWeight: 'bold',
        marginBottom: '2px',
        color: '#afaead',
        textAlign: 'right',
        letterSpacing: '1px',
    },

    inform1: {
        flex: 1,
        backgroundColor: '#242526',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '7px',
        marginTop: '5px',
        marginBottom: '5px',
    },

    inform2: {
        flex: 1,
        backgroundColor: '#3a3b3c',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '7px',
        marginTop: '5px',
        marginBottom: '5px',
    },

    tituloInform: {
        color: '#319997',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textAlign: 'center',
    },

    subInform: {
        color: '#afaead',
        fontSize: '10px',
        letterSpacing: '1px',
        textAlign: 'center',
    },

  });

export default styles;

