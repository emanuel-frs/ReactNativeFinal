import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
jogoCard: {
    width: '100%',
    height: 180,
    backgroundColor: '#1d1e2a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
},
jogoImg: {
    width: "45%",
    height: "100%",
    borderColor: '#FDE251',
    borderWidth: 3,
    backgroundColor: 'grey',
},
jogoInfo: {
    width: '50%',
    height: '100%',
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10
},
jogoName: {
    color: '#FDE251',
    fontSize: 18
},
jogoBtn: {
    backgroundColor: '#FDE251',
    borderRadius: 12,
    width: '75%',
    height: 40,
    justifyContent: 'center',
    alignItems: "center"
},
jogoBtnText: {
    fontSize: 20,
},
padraoText:{
    fontFamily: 'Museo-Moderno-Medium',
}
})