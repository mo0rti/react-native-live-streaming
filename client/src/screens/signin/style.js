import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white'
  },
  title: {
    textAlign: 'center',
    fontSize: 17
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  txtUsername: {
    height: 40, 
    width: '40%', 
    borderColor: 'gray', 
    borderWidth: 1, 
    padding: 5,
    marginTop: 50
  },
  btnSignin: {
    width: "100%",
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  singinCaption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white'
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0
  }
});

export default styles;