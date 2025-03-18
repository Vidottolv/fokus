import { Text, View, StyleSheet,Image, Pressable } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}>
        <Image source={require('../assets/images/pomodoro.png')}/>
        <View style={styles.actions}>
          <View style={styles.content}>
            <Pressable style={styles.contextButton}>
              <Text style={styles.contextButtonText}>
                Foco
              </Text>
            </Pressable>
            <Pressable style={styles.contextButton}>
            <Text style={styles.contextButtonText}>
                Pausa curta
              </Text>
            </Pressable>
            <Pressable style={styles.contextButton}>
              <Text style={styles.contextButtonText}>
                Pausa longa
              </Text>
            </Pressable>
          </View>
          <Text style={styles.timer}>
            25:00
          </Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Começar
            </Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Projeto fictício e sem fins comerciais.
          </Text>
          <Text style={styles.footerText}>
            Desenvolvido por Alura.
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap:40
  },
  content: {
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  timer: {
    color:'#fff',
    fontSize:60,
    fontWeight:'bold',
    textAlign: 'center'
  },
  actions: {
    paddingVertical:24,
    paddingHorizontal:24,
    backgroundColor:'#14448080',
    width:'80%',
    borderRadius:32,
    borderWidth:2,
    borderColor:'#144480',
    gap:32
  },
  button: {
    backgroundColor: '#B872FF',
    padding:8,
    borderRadius:32
  },
  buttonText: {
    textAlign:'center',
    fontSize:18,
    color:'#021123'
  },
  footer: {
    width:'80%',
  },
  footerText: {
    textAlign:'center',
    color:'#98A0A8',
    fontSize:12.5
  },
  contextButtonText: {
    fontSize:12.5,
    color:'#FFF',
    padding:8
  },
  contextButton: {
    backgroundColor:'#144480',
    borderRadius:8
  }
})