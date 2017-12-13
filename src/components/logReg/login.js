import React,{Component} from 'react';
import {View,
        Text,
        TextInput,
        StyleSheet,
        Button
      } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userAction from '../../actions/user';

const mapStateToProps=(state)=>{
  return{
    username:state.userStore.username
  }
}
const mapDispatchToProps=dispatch=>({
    actions:bindActionCreators(userAction,dispatch)
})
class Login extends Component{
  constructor(){
    super();
    this.state={
      username:null,
      password:null
    }
  }
  Login(){
    fetch(`http://192.168.37.2:3000/userLog?user=${this.state.username}&pass=${this.state.password}`
  ).then(response=>response.json()
      ).then(responseJson=>{
        if(responseJson.status=='ok'){
          this.props.actions.setUser(this.state.username);
        }
      }).catch((err)=>{
        console.log(err)
      })
  }
  render(){
    return(
      <View style={styles.container}>
       <View style={styles.InputContainer}>
         <Text>用户名</Text>
         <TextInput style={styles.Input} placeholder='请输入用户名'
          onChangeText={(text)=>{this.setState({username:text})}}/>
       </View>
        <View style={styles.InputContainer}>
         <Text>密码</Text>
         <TextInput  style={styles.Input} secureTextEntry={true} placeholder="请输入密码"  onChangeText={(text)=>{
           this.setState({password:text})
         }}/>
        </View>
        <Text onPress={this.Login.bind(this)} style={styles.Login}>登录</Text>
      </View>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);

const styles=StyleSheet.create({
  container:{
    width:'100%',
    height:200,
    justifyContent:'center',
    alignItems:'center'
  },
  InputContainer:{
    width:340,
    flexDirection:'row',
    alignItems:'center',
    marginTop:5,
    justifyContent:'space-between'
  },
  Input:{
    width:240
  },
  Login:{
    marginTop:20,
    width:340,
    height:36,
    borderRadius:5,
    lineHeight:30,
    fontSize:16,
    backgroundColor:'green',
    textAlign:'center',
    color:'#fff'
  }
})
