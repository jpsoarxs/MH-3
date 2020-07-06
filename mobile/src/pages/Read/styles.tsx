import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    marginBottom: 40,
  },
  topText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#515C6F',
    fontWeight: 'bold',
    fontFamily: 'Poppins_400Regular',
  },
  headerText: {
    marginLeft: 8,
    marginTop: -30,
    fontSize: 20,
    color: '#515C6F',
    fontFamily: 'Poppins_700Bold',
  },
  headerTextSelected: {
    marginLeft: 8,
    marginTop: -30,
    fontSize: 20,
    color: '#515C6F',
    textDecorationLine: "underline",
    fontFamily: 'Poppins_700Bold',
  },
  book: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
    width: "95%",
    height: 270,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageBook: {
    width: 160,
    height: 190,
  },
  titleBook: {
    color: '#FD7E77',
    fontSize: 24,
    fontFamily: 'Poppins_400Regular',
  },
  desc: {
    color: '#515C6F',
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
  },
  description: {
    alignSelf: "center",
    color: '#707070',
    fontSize: 10,
    fontFamily: 'Poppins_400Regular',
    marginLeft: 20
  },
  available: {
    color: '#0C1226',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  }
});