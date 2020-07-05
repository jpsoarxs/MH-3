import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Image, ScrollView, TouchableNativeFeedback } from 'react-native'
import { Icon, Input, TopNavigation, TopNavigationAction, Text, Button } from '@ui-kitten/components';

const Interests: React.FC = ({ navigation }: any) => {
  const [buttonHover, setButtonHover] = useState('#FFF');

  const hoverButton = () => {
    setButtonHover("#D4D4D4")
    setInterval(() => {setButtonHover("#FFF")},100)
  }

  const handlerPressBack = () => {
    navigation.goBack()
  };

  const giftButton = () => {
    navigation.navigate("GetStarted")
  };

  const BackIcon = (props: any) => (
    <Icon fill="#000" {...props} name='arrow-back'/>
  );

  const BackAction = () => (
    <TopNavigationAction onPress={handlerPressBack} icon={BackIcon}/>
  );

  const list = [
    {icon: require("../../../assets/Icons/design.png"), name: "Design"},
    {icon: require("../../../assets/Icons/tecnologia.png"), name: "Tecnologia"},
    {icon: require("../../../assets/Icons/saude.png"), name: "Saúde"},
    {icon: require("../../../assets/Icons/direito.png"), name: "Direito"},
    {icon: require("../../../assets/Icons/negocios.png"), name: "Negócio"},
    {icon: require("../../../assets/Icons/engenharia.png"), name: "Engenharia"},
    {icon: require("../../../assets/Icons/marketing.png"), name: "Marketing"},
  ]

  return (
    <SafeAreaView style={{flex:1, backgroundColor: "#FFF"}}>
      <View style={styles.header}>
        <TopNavigation
          accessoryLeft={BackAction}
          style={{marginTop: 30, backgroundColor: "transparent"}}
        />
        <View style={{marginTop:-30}}>
          <Text style={styles.text}>Escolha sua área</Text>
          <Text style={styles.text}>de</Text>
          <Text style={styles.text}>interesse</Text>
        </View>
        <Text style={styles.subtext}>Não se preocupe, você pode alterar isso depois.</Text>
      </View>
      <ScrollView style={{marginTop:15}}>
        <View style={styles.box}>
          {list.map(item => (
            <TouchableNativeFeedback key={item.name} onPress={giftButton}>
              <View style={styles.card}>
                <Image style={styles.image} source={item.icon} />
                <Text style={styles.title}>{item.name}</Text>
              </View>
            </TouchableNativeFeedback>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 350,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignSelf: "center",
  },
  header: {
    width: "100%",
    height: 215,
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  text: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: "#515C6F",
    textAlign: "center",
    marginBottom: -15,
  },
  subtext: {
    fontFamily: 'Poppins_400Regular',
    color: "#515C6F",
    fontSize: 10,
    textAlign: "center",
    marginTop: 35
  },
  card: {
    width: 170,
    height: 100,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 44,
    height: 44,
  },
  title: {
    fontFamily: 'Poppins_400Regular',
  }
});

export default Interests;