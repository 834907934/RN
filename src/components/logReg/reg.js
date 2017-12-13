import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class Register extends Component{
  constructor(){
    super();
    this.state={
      username:null,
      password:null
    }
  }
  register(){
    fetch(`http://192.168.37.2:3000/userReg?act=reg&user=${this.state.username}&pass=${this.state.password}`)
     .then(res=> res.json())
     .then(resJson=>{
       console.log(resJson);
     })
     .catch((e)=>{
       console.log(e);
     })
  }
  render(){
    return(
      <View style={styles.container}>
       <View style={styles.InputText}>
         <Text>用户名</Text>
         <TextInput onChangeText={text=>{this.setState({username:text})}} style={styles.Input} placeholder="请输入用户名"/>
       </View>
       <View style={styles.InputText}>
         <Text>密码</Text>
         <TextInput onChangeText={text=>{this.setState({password:text})}} style={styles.Input} placeholder="请输入密码" />
       </View>
        <Text onPress={this.register.bind(this)} style={styles.regButton}>注册</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    height:200,//一定要加上高度不然无法进行居中
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  InputText:{
    width:340,
    marginTop:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  Input:{
    width:240
  },
  regButton:{
    width:340,
    height:36,
    lineHeight:30,
    fontSize:16,
    marginTop:20,
    borderRadius:5,
    color:"#fff",
    textAlign:'center',
    backgroundColor:'green',
  }
})
