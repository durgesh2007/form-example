import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Home = ({ navigation }: any) => {
  return (
    <View style={{ margin: 20, }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FirstPage')}>
        <Text>First Form</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignIn')}>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PageBase')}>
        <Text>Dyanamic Form</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    margin: 10,
    padding: 10,
    alignItems: "center"
  },
});