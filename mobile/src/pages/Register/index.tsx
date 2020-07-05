import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View, Image, TouchableWithoutFeedback  } from 'react-native'
import { Icon, Input, TopNavigation, TopNavigationAction, Text, Button } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';

const Register: React.FC = ({ navigation }: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerPressBack = () => {
    navigation.goBack()
  };

  const handlerLogin = () => {
    navigation.navigate("Login")
  };

  const BackIcon = (props: any) => (
    <Icon fill="#FFF" {...props} name='arrow-back'/>
  );

  const FacebookIcon = (props: any) => (
    <Icon {...props} name='facebook'/>
  );

  const GoogleIcon = (props: any) => (
    <Icon {...props} name='google'/>
  );

  const AlertIcon = (props: any) => (
    <Icon {...props} name='alert-circle-outline'/>
  );

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );


  const BackAction = () => (
    <TopNavigationAction onPress={handlerPressBack} icon={BackIcon}/>
  );

  return (
    <KeyboardAvoidingView style={{flex:1, backgroundColor: "#FFF"}}>
      <LinearGradient
        colors={['#FF5B7F', '#FC9272']}
        style={{
          width: "100%",
          height: 215,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <TopNavigation
            accessoryLeft={BackAction}
            style={{backgroundColor: "transparent", marginTop: -40}}
          />
          <Image style={styles.image} source={require('../../../assets/logo_white.png')} />
      </LinearGradient>
      <View style={styles.container}>
        <Input
          placeholder='Nome'
          value={email}
          size='large'
          onChangeText={nextValue => setEmail(nextValue)}
          style={styles.input}
        />
        <Input
          placeholder='Email'
          value={email}
          size='large'
          onChangeText={nextValue => setEmail(nextValue)}
          style={styles.input}
        />
        <Input
          value={password}
          placeholder='Senha'
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          style={styles.input}
          size='large'
          onChangeText={nextValue => setPassword(nextValue)}
        />
        <Input
          value={password}
          placeholder='Confirmar senha'
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          size='large'
          onChangeText={nextValue => setPassword(nextValue)}
        />
        <Button appearance='outline' style={styles.loginButton}>Criar a conta</Button>
        <Text style={styles.ou}>OU</Text>
        <View style={{justifyContent: 'space-between',flexDirection: 'row', alignSelf: "center"}}>
        <Button 
          accessoryLeft={FacebookIcon} 
          style={styles.facebookButton} 
          status="info">
            <Text style={{fontSize: 8, color: "#FFF"}}>Login com o Facebook</Text>
        </Button>
        <Button 
          accessoryLeft={GoogleIcon} 
          style={styles.googleButton} 
          status="danger">
            <Text style={{fontSize: 8, color: "#FFF"}}>Login com o Google</Text>
        </Button>
        </View>
        <View style={{flexDirection: "row", marginTop: 25, alignSelf: "center"}}>
          <Text style={styles.text} >Já tem uma conta?</Text>
          <Text style={styles.url} onPress={handlerLogin}> Faça login </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: 350,
    marginTop: 25
  },
  image: {
    alignSelf: "center",
  },
  input: {
    marginBottom: 20
  },
  forgotpassword: {
    alignSelf: 'flex-end',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    marginTop: 5,
    color: "#777777"
  },
  loginButton: {
    marginTop: 40,
    height: 50
  },
  ou: {
    textAlign: "center",
    fontFamily: 'Poppins_400Regular',
    marginTop: 15,
    color: "#777777",
    marginBottom: 15
  },
  facebookButton: {
    width: 150,
    height: 50,
  },
  googleButton: {
    width: 150,
    height: 50,
    marginLeft: 15
  },
  text: {
    fontFamily: 'Poppins_400Regular',
    color: "#777777"
  },
  url: {
    fontFamily: 'Poppins_400Regular',
    color: "#FF5B7F"
  }
});

export default Register;