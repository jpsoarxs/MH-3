import React from 'react';

import Swiper from 'react-native-swiper'
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAvoidingView, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Icon, Input, TopNavigation, TopNavigationAction, Text, Button } from '@ui-kitten/components';

import styles from './styles';

const Read: React.FC = ({ navigation }: any) => {

  const handlerPressBack = () => {
    navigation.goBack()
  };

  const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
  );

  const BackAction = () => (
    <TopNavigationAction onPress={handlerPressBack} icon={BackIcon} />
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <TopNavigation
        accessoryLeft={BackAction}
        title={<Text style={styles.topText}>Últimos Trechos Lidos</Text>}
        style={{ marginTop: 30, backgroundColor: "transparent" }}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ width: 150, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.headerTextSelected}>Livros</Text>
            <Text style={styles.headerText}>Artigos</Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}>
            <View style={styles.book}>
              <Text style={styles.titleBook}>Não me faça pensar</Text>
              <Text style={styles.desc}>Livro</Text>
              <View style={{ width: "90%", flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Image style={styles.imageBook} source={require('../../../assets/Home/livro1.png')} />
                <View style={{ width: "90%", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
                  <Text style={styles.description}>Data da primeira publicação: 2014</Text>
                  <Text style={styles.description}>Autores: Steve Krug, Daniel Croce</Text>
                  <Text style={styles.available}>Disponível em:</Text>
                  <Image source={require('../../../assets/kindle.png')} />
                </View>
              </View>
            </View>
            <View style={styles.book}>
              <Text style={styles.titleBook}>O teste da mãe</Text>
              <Text style={styles.desc}>Livro</Text>
              <View style={{ width: "90%", flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Image style={styles.imageBook} source={require('../../../assets/Home/livro2.png')} />
                <View style={{ width: "90%", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
                  <Text style={styles.description}>Data da primeira publicação: 2019</Text>
                  <Text style={styles.description}>Autor: Rob Fitzpatrick</Text>
                  <Text style={styles.available}>Disponível em:</Text>
                  <Image source={require('../../../assets/kindle.png')} />
                </View>
              </View>
            </View>
            <View style={styles.book}>
              <Text style={styles.titleBook}>O Design do dia a dia</Text>
              <Text style={styles.desc}>Livro</Text>
              <View style={{ width: "90%", flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Image style={styles.imageBook} source={require('../../../assets/Home/livro3.png')} />
                <View style={{ width: "90%", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
                  <Text style={styles.description}>Data da primeira publicação: 1988</Text>
                  <Text style={styles.description}>Autor: Donald Norman</Text>
                  <Text style={styles.available}>Disponível em:</Text>
                  <Image source={require('../../../assets/kindle.png')} />
                </View>
              </View>
            </View>
          </ScrollView>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );

}

export default Read