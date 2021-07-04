import React, { useState, useEffect, useMemo } from 'react';
import { Text, SafeAreaView, View, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import theme from '../../theme'
import { InputWithSignup, SocialLogin } from './widgets/LoginWidget'

const SignUpStack = ({ navigation }) => {
  const [state, setState] = useState({
    login: false,
    email: '',
    pass: '',
  });

  useEffect(() => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(state.email) === true && state.pass.length >= 6) {
      setState((prev) => ({
        ...prev,
        login: true,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        login: false,
      }));
    }
  }, [state.email, state.pass]);

  const loginFunc = () => {
    Alert.alert("Login", `Email is ${state.email} and Password is the ${state.pass}`)
  }
  const ForgetPsd = () => {
    return (
      <View style={styles.forgetPsd}>
        <Text style={styles.forgetPsdText1}>
          Forgotten your login details?
            </Text>
        <TouchableOpacity onPress={() => alert('Nothing is Added')} >
          <Text style={styles.forgetPsdText2}>
            {' Get help with logging in.'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const Or = () => {
    return (
      <View style={styles.orContainer}>
        <View style={styles.orText}>
          <Text style={{ textAlign: 'center' }}>OR</Text>
        </View>
        <View style={styles.orCrossedLine} />
      </View>
    );
  }

  const SocialSection = () => {
    return (
      <View>
        <Or />
        <SocialLogin />
      </View>
    );
  }

  const BottomText = () => {
    return (
      <View style={styles.bottomText}>
        <Text style={{ color: 'rgba(150,150,150,1)' }}>
          Do you have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} >
          <Text style={{ fontWeight: '600' }}>
            {' Log In.'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View />
      <View style={styles.mainContent}>
        <Text style={styles.logo}>Instezz</Text>
        <View>
          <InputWithSignup
            state={state}
            setState={setState}
            loginFunc={loginFunc}
            buttonText={'Sign Up'}
          />
        </View>
      </View>
      <BottomText />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.card,
    justifyContent: 'space-between'
  },
  logo: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
  },
  mainContent: {
    marginHorizontal: 20,
  },
  emailInput: {
    backgroundColor: 'rgba(150,150,150, .1)',
    borderWidth: 1,
    borderColor: 'rgba(150,150,150, .3)',
    padding: 10,
    fontSize: 15,
    marginTop: 15,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: theme.colors.fbButtonColorNew,
    padding: 11,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginButtonDisable: {
    backgroundColor: theme.colors.fbButtonColorNewDisable,
    padding: 11,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  orContainer: {
    justifyContent: 'center',
    height: 20,
  },
  orText: {
    backgroundColor: 'white',
    alignSelf: 'center',
    zIndex: 1,
    paddingHorizontal: 10
  },
  orCrossedLine: {
    borderWidth: .2,
    borderColor: 'rgba(10,10,10,.4)',
    position: 'absolute',
    width: '100%',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 15,
  },
  forgetPsd: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  forgetPsdText1: {
    fontSize: 13,
    color: 'rgba(150,150,150,1)',
  },
  forgetPsdText2: {
    fontSize: 13,
    fontWeight: '600',
  },
  facebookLogin: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(150,150,150,.4)',
    width: '70%',
    borderRadius: 50,
    paddingVertical: 5,
  },
  facebookLogo: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },
  googleLogo: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },
  facebookLogoText: {
    color: theme.colors.fbButtonColorNew,
    fontSize: 13,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  bottomText: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(150,150,150,0.4)',
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'center'
  }
})

export default SignUpStack;