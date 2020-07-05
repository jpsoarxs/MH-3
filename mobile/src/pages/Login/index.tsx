import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View, Image, TouchableWithoutFeedback  } from 'react-native'
import { Icon, Input, TopNavigation, TopNavigationAction, Text, Button } from '@ui-kitten/components';

const Login: React.FC = ({ navigation }: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerPressBack = () => {
    navigation.goBack()
  };

  const BackIcon = (props: any) => (
    <Icon {...props} name='arrow-back'/>
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
      <TopNavigation
        accessoryLeft={BackAction}
        style={{marginTop: 30, backgroundColor: "transparent"}}
      />
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/logo.png')} />
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
          size='large'
          onChangeText={nextValue => setPassword(nextValue)}
        />
        <Text style={styles.forgotpassword}>Esqueceu a senha?</Text>
        <Button style={styles.loginButton}>Fazer Login</Button>
        <Text style={styles.ou}>OU</Text>
        <Button accessoryLeft={FacebookIcon} style={styles.facebookButton} status="info">Login com o Facebook</Button>
        <Button accessoryLeft={GoogleIcon} status="danger">Login com o Google</Button>
        <View style={{flexDirection: "row", marginTop: 25, alignSelf: "center"}}>
          <Text style={styles.text} >Novo usuário?</Text>
          <Text style={styles.url}> Cadastre-se </Text>
          <Text style={styles.text}>Aqui!</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    marginTop: 100,
    alignSelf: "center",
    width: 350,
  },
  image: {
    alignSelf: "center",
    marginBottom: 70
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
    marginTop: 50
  },
  ou: {
    textAlign: "center",
    fontFamily: 'Poppins_400Regular',
    marginTop: 15,
    color: "#777777",
    marginBottom: 15
  },
  facebookButton: {
    marginBottom: 20
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

export default Login;