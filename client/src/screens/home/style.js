import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white'
  },
  livebar: {
    width: '100%',
    height: 80,
    backgroundColor: '#f2f5f9'
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
  btnLive: {
    width: "100%",
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  liveButtonCaption: {
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