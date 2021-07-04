import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import TextInputBox from '../../../components/TextInputBox'
import theme from '../../../theme'
import { styles } from '../login'



const InputWithLogin = ({ state, setState, loginFunc, buttonText }) => {
  return (
    <View>
      <TextInputBox
        autoFocus={true}
        style={styles.emailInput}
        placeholder={'Email'}
        value={state.email}
        keyboardType={"email-address"}
        onChangeText={(text) => setState((prev) => ({ ...prev, email: text }))}
      />
      <TextInputBox
        secureTextEntry
        style={styles.emailInput}
        placeholder={'Password'}
        value={state.pass}
        onChangeText={(text) => setState((prev) => ({ ...prev, pass: text }))}
      />
      <TouchableOpacity
        onPress={loginFunc}
        style={(state.login) ? styles.loginButton : styles.loginButtonDisable}
        disabled={(state.login) ? false : true}
      >
        <Text style={styles.loginButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const InputWithSignup = ({ state, setState, loginFunc, buttonText }) => {
  return (
    <View>
      <TextInputBox
        autoFocus={true}
        style={styles.emailInput}
        placeholder={'User Name'}
        value={state.email}
        keyboardType={"email-address"}
        onChangeText={(text) => setState((prev) => ({ ...prev, email: text }))}
      />
      <TextInputBox
        secureTextEntry
        style={styles.emailInput}
        placeholder={'Email'}
        value={state.pass}
        onChangeText={(text) => setState((prev) => ({ ...prev, pass: text }))}
      />
      <TextInputBox
        autoFocus={true}
        style={styles.emailInput}
        placeholder={'Phone Number'}
        value={state.email}
        keyboardType={"email-address"}
        onChangeText={(text) => setState((prev) => ({ ...prev, email: text }))}
      />
      <TextInputBox
        secureTextEntry
        style={styles.emailInput}
        placeholder={'Password'}
        value={state.pass}
        onChangeText={(text) => setState((prev) => ({ ...prev, pass: text }))}
      />
      <TextInputBox
        secureTextEntry
        style={styles.emailInput}
        placeholder={'Confirm Password'}
        value={state.pass}
        onChangeText={(text) => setState((prev) => ({ ...prev, pass: text }))}
      />
      <TouchableOpacity
        onPress={loginFunc}
        style={(state.login) ? styles.loginButton : styles.loginButtonDisable}
        disabled={(state.login) ? false : true}
      >
        <Text style={styles.loginButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const SocialLogin = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => alert('Nothing is Added')} style={styles.facebookLogin}>
        <Image source={require("../../../assets/images/facebookLogo.png")} style={styles.facebookLogo} />
        <Text style={styles.facebookLogoText}>Log In With Facebook</Text>
        <View />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Nothing is Added')} style={styles.facebookLogin}>
        <Image source={require("../../../assets/images/googleLogo.png")} style={styles.googleLogo} />
        <Text style={styles.facebookLogoText}>Log In With Google</Text>
        <View />
      </TouchableOpacity>
    </View>
  );
}

export {
  SocialLogin,
  InputWithLogin,
  InputWithSignup
}