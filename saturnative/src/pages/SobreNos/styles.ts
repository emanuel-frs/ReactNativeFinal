import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    barra: {
        backgroundColor: "#1D1E2B",
        width: "100%",
        flex: 1
    },
  containerPai: {
    flexGrow: 1,
    backgroundColor: '#14151E',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 20
  },
  containerFilho: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: "center",
    padding: 10,
  },
  foto: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 7,
    borderColor: "#FDE251",
  },
  linksContainer: {
    marginLeft: 10,
  },
  link: {
    color: 'white',
    fontSize: 15,
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
});

export default styles;