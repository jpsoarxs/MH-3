import React from 'react';

import Swiper from 'react-native-swiper'
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAvoidingView, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Icon, Input, TopNavigation, TopNavigationAction, Text, Button } from '@ui-kitten/components';

import styles from './styles';

const Home: React.FC = ({ navigation } : any) => {

  const DesignIcon = (props) => (
    <Image style={styles.image} source={require('../../../assets/Home/design-icon.png')} />
  );

  const renderSettingsAction = () => (
    <TopNavigationAction icon={DesignIcon} />
  );

  const bookList = [
    {id: 1, name: "Não me faça pensar", capitulo: "01", time: "10 minutos", image: require('../../../assets/Home/livro1.png') },
    {id: 2, name: "O teste da mãe", capitulo: "01", time: "8 minutos", image: require('../../../assets/Home/livro2.png') },
    {id: 3, name: "O Design do dia a dia", capitulo: "01", time: "18 minutos", image: require('../../../assets/Home/livro3.png') },
  ]

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <TopNavigation
        title={<Text style={styles.topText}>Meu Feed</Text>}
        style={{ marginTop: 30, backgroundColor: "transparent" }}
        accessoryRight={renderSettingsAction}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Dicas de Leitura</Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {bookList.map(book => (
              <View style={styles.book} key={book.id}>
              <Text style={styles.titleBook}>{book.name}</Text>
              <Text style={styles.desc}>Capítulo {book.capitulo}</Text>
              <Text style={styles.description}>Tempo médio de leitura:</Text>
              <Text style={styles.description}>{book.time}</Text>
                <TouchableOpacity onPress={() => {navigation.navigate("Book")}}>
                  <Image style={styles.imageBook} source={book.image} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          <View style={styles.containerProfession}>
            <LinearGradient
              colors={['#FF5B7F', '#FC9272']}
              style={{
                left: 0,
                right: 0,
                top: 0,
                height: 80,
                alignSelf: 'center',
                width: 360,
                borderRadius: 10,
                flex: 1
              }}
            >
              <View style={styles.containerIcon}></View>
              <Image style={{ width: 31, height: 24, marginTop: -38, marginLeft: 30 }} source={require('../../../assets/Home/profession.png')} />
              <Text style={styles.textProfessionBold}>
                Profissão em alta do mês
              </Text>
              <Text style={styles.textProfession}>
                UX Designer
              </Text>
            </LinearGradient>
          </View>
          <View style={styles.containerArticles}>
            <Text style={styles.titleText}>Artigo da Semana</Text>
            <Image style={{ width:400, height: 200, marginTop: 10, marginLeft: -20 }} source={require('../../../assets/Home/plants.png')} />
            <View style={{ height: 80, width: 355, borderRadius: 5, position: 'absolute', top: 175, left: 2, right: 0, bottom: 0, justifyContent: 'center', backgroundColor:'#000', opacity: 0.6}}/>
              <Text style={{position: 'absolute', top: 177, left: 25, right: 0, bottom: 0, color:'#FFF', fontFamily: 'Poppins_100Thin'}}>UX Collective</Text>
              <Text style={{position: 'absolute', top: 195, left: 25, right: 0, bottom: 0, color:'#FFF', fontFamily: 'Poppins_600SemiBold'}}>3 papéis que designers podem desempenhar</Text>
          </View>
          <View>
            <Text style={{ marginTop: 0, marginLeft: 8, fontSize: 20, color: '#515C6F', fontWeight: 'bold', fontFamily: 'Poppins_400Regular' }}>
              Profissionais de Design
              </Text>
            <View style={styles.containerProfessionals}>
              <Text style={{ fontSize: 16, fontFamily: 'Poppins_600SemiBold', color: '#515C6F', marginTop: 15, marginLeft: 20 }}>Lucas Nonato</Text>
              <Text style={{ fontSize: 16, fontFamily: 'Poppins_400Regular', color: '#515C6F', marginLeft: 20 }}>UX Designer e CO-Founder</Text>
              <Text style={{ fontSize: 12, fontFamily: 'Poppins_400Regular', color: '#515C6F', marginLeft: 20 }}>Finger Consultoria</Text>
              <Text style={{ fontSize: 13, fontFamily: 'Poppins_400Regular', fontWeight: 'bold', color: '#B1B9C2', marginLeft: 20, width: 195 }}>A trajetória incrível de Lucas focada em conceitos atuais como Design thinking fez ele atingir um alto patamar no mercado do Design e no mundo das Startups.</Text>
              <Image style={{ marginTop: -105, marginLeft: 230 }} source={require('../../../assets/Home/lucas.png')} />
              <TouchableOpacity onPress={() => { Linking.openURL('#') }} style={{ width: 108, height: 11, top: 25 }}><Text style={{ color: '#768BD8', fontSize: 12, marginLeft: 20, textDecorationLine: 'underline', fontWeight: 'bold', marginTop: -20 }}>Saiba mais</Text></TouchableOpacity>
            </View>
            <View style={styles.containerQuiz}>
              <Text style={styles.titleText}>Quiz do Dia</Text>
              <Text style={{ fontSize: 32, fontFamily: 'Poppins_900Black', fontWeight: 'bold', color: '#3CE6AC', marginTop: 15, marginLeft: 20 }}>+120 XP</Text>
              <Text style={{ fontSize: 13, fontFamily: 'Poppins_400Regular', fontWeight: 'bold', color: '#B1B9C2', marginTop: 10, marginLeft: 20, width: 195 }}>Diferenças entre UX Design e UI Design</Text>
              <TouchableOpacity onPress={() => { Linking.openURL('http://www.example.com/') }} style={{ width: 108, height: 11 }}><Text style={{ color: '#829BFA', fontSize: 12, marginLeft: 20, textDecorationLine: 'underline', fontWeight: 'bold', marginTop: 10 }}>Comece agora</Text></TouchableOpacity>
              <Image style={{ marginTop: -115, marginLeft: 200 }} source={require('../../../assets/Home/quiz.png')} />
            </View>
            <Text style={styles.titleText}>Artigos</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.containerArticles2}>
                <Image source={require('../../../assets/Home/guia.png')} />
                <Text style={styles.titleArticle}>Designer</Text>
                <Text style={styles.articleDescription}>O guia completo para criar um novo arquivo no illustrator</Text>
              </View>
              <View style={styles.containerArticles2}>
                <Image source={require('../../../assets/Home/trabalhar.png')} />
                <Text style={styles.titleArticle}>Clube do design</Text>
                <Text style={styles.articleDescription}>Como começar a trabalhar com web design</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );

}

export default Home;