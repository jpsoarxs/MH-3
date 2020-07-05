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
    book: {
      flex: 1,
      alignItems: 'center',
      marginTop: 15,
      width: 200,
      height: 270,
      marginBottom: 20,
    },
    imageBook: {
      width: 160,
      height: 190,
    },
    titleBook: {
      color: '#FD7E77',
      fontSize: 12,
      fontFamily: 'Poppins_400Regular',
    },
    desc: {
      color: '#515C6F',
      fontSize: 10,
      fontFamily: 'Poppins_400Regular',
    },
    description: {
      color: '#C9D1EF',
      fontSize: 10,
      fontFamily: 'Poppins_400Regular',
    },
    containerProfession: {
      marginLeft: 8,
      marginRight: 8,
      height: 81,
    },
    containerIcon: {
      marginTop: 13,
      marginLeft: 20,
      backgroundColor: '#fff',
      height: 56,
      width: 56,
      borderRadius: 56 / 2,
    },
    textProfessionBold: {
      marginTop: -35,
      marginLeft: 93,
      fontFamily: 'Poppins_700Bold',
      fontSize: 11,
      color: '#fff',
    },
    textProfession: {
      marginLeft: 93,
      fontFamily: 'Poppins_400Regular',
      fontSize: 11,
      color: '#fff',
    },
    titleText: {
      marginTop: 20,
      marginLeft: 8,
      fontSize: 20,
      color: '#515C6F',
      fontWeight: 'bold',
      fontFamily: 'Poppins_700Bold',
    },
    containerArticles: {
      width:337,
      height:237,
      marginBottom: 50,
    },
    containerProfessionals: {
      width:337,
      height:237,
    },
    containerQuiz: {
      marginTop: -20,
      width: 337,
      height: 210,
    },
    containerArticles2: {
      marginTop: 20,
      marginLeft: 5,
      width: 250,
      height: 260,
      marginRight:20,
    },
    titleArticle: {
      color: '#FD7E77',
      fontFamily: 'Poppins_300Light',
      marginTop: 20,
      marginLeft: 16,
      
    },
    articleDescription: {
      color: '#515C6F',
      fontFamily: 'Poppins_400Regular',
      marginTop: 10,
      marginLeft: 16,
    },
  });