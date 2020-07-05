import React,{useState} from 'react';
import { Text, Button, Icon } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, View, Image, StyleSheet } from 'react-native'

const getStarted: React.FC = ({ navigation } : any) => {

  const [buttonHover, setButtonHover] = useState('#FFF');

  const hoverButton = () => {
    setButtonHover("#D4D4D4")
    setInterval(() => {setButtonHover("#FFF")},100)
    navigation.navigate("Gift")
  }

  const ArrowIcon = (props: any) => (
    <Icon {...props} fill="#FC9272" name='arrow-forward'/>
  );

  return (
    <LinearGradient
    colors={['#FF5B7F', '#FC9272']}
    style={{
      left: 0,
      right: 0,
      top: 0,
      height: 300,
      flex:1
    }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Image style={styles.image} source={require('../../../assets/GetStartded/1.jpg')} />
          <Text style={styles.title}>Letícia Oliveira</Text>
          <Text style={styles.desc}>Sua conta está pronta! Clique em Comece agora para prosseguir.</Text>
        </View>
        <Button onPress={hoverButton} accessoryRight={ArrowIcon} style={[styles.button, {backgroundColor: buttonHover}]}>
          <Text style={{color:"#FC9272", fontSize: 12, fontFamily: "Poppins_500Medium"}}>Comece agora</Text>
        </Button>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    marginTop: 216,
    borderRadius: 130,
    width: 130,
    height: 130,
    borderWidth: 4,
    borderColor: "#FFF"
  },
  title: {
    textAlign: "center",
    marginTop: 64,
    color: "#FFF",
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold"
  },
  desc: {
    textAlign: "center",
    alignSelf: "center",
    marginTop: 10,
    color: "#FFF",
    fontFamily: "Poppins_400Regular",
    flexWrap: "wrap",
    maxWidth: 400
  },
  button: {
    alignSelf: "center",
    marginTop: 64,
    borderWidth: 0,
    borderRadius: 23,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
});

export default getStarted;