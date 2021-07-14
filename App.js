import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Constants from "expo-constants";
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function App() {
  const[passWord, setPassword]=useState();
  function submitPass(){
    console.log(passWord);
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView behavior={Platform.OS==="ios"?"padding":"height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
    <View  style={styles.content}>
      <View style={styles.textWrapper}>
      <Text style={styles.hiText}>ようこそ！</Text>
      <Text style={styles.usertext}>ミン・ティエン </Text>
      <Text style={[styles.usertext,{color:"black",}]}>123456789</Text>
      </View>
    </View>
    <View style={styles.form}>
    <FontAwesome5 name="lock" size={20} color="#8d9193" style={{position:"relative" ,top:55,left:30,zIndex:3}} />
      <View style={styles.inputPass}><TextInput style={styles.inputPassword} 
      keyboardType="numeric" secureTextEntry={true} autoFocus={true}placeholder="パスワード入力" 
      placeholderTextColor="#929292" textAlign="center" value={passWord} onChangeText={(text)=>setPassword(text)}>
        </TextInput></View>
      <TouchableOpacity style={styles.buttonLogin}onPress={submitPass}>
        <Text style={styles.buttonLoginText}>ログイン</Text>
      </TouchableOpacity>
    </View >
    <View style={styles.action}>
      <TouchableOpacity style={styles.buttonAction}>
      <Text style={styles.buttonLoginAction}>パスワードを忘れた方はこちら</Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.buttonAction}>
      <Text style={styles.buttonLoginAction}>ログアウト</Text>
      </TouchableOpacity> 
    </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const TEXT={
  color:"#1a89ce",
  textAlign:"center",

}
const INPUT={
  marginTop:15,
  marginLeft:30,
  marginRight:30,
  

  
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#bebcc4",
    paddingTop:Constants.statusBarHeight,
  },
  content:{
    paddingHorizontal:30,
  },
  textWrapper:{
    marginTop:60,
    marginBottom:30,
  },
  hiText:{
    ...TEXT,
    fontSize:20,
    lineHeight:50,
    fontWeight:"bold",
  },
  usertext:{
    ...TEXT,
    fontSize:16,
    lineHeight:30,

  },
  inputPass:{
    ...INPUT,
    width:360,

  },
  inputPassword:{
    height:60,
    backgroundColor:"#fff",

  },
  buttonLogin:{
    ...INPUT,
  backgroundColor:"#1a89ce",
  height:50,
  borderRadius:10,
  justifyContent:"center",
  alignItems:"center",

},
action:{
  flexDirection:"row",
  justifyContent:"space-between",

},
buttonLoginAction:{
  ...INPUT,
}
});
