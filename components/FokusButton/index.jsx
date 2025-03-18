import { Pressable, StyleSheet,Text } from "react-native"

export const FokusButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button}
      onPress={onPress}>
      <Text style={styles.buttonText}>
         {title}
      </Text>
    </Pressable>  
  )
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B872FF',
    padding:8,
    borderRadius:32
  },
  buttonText: {
    textAlign:'center',
    fontSize:18,
    color:'#021123'
  }
})