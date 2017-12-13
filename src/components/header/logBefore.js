import React,{Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userAction from '../../actions/user';
const mapStateToProps=state=>{
  return {
    logToggle:state.userStore.logToggle,
    regToggle:state.userStore.regToggle
  }
}

const mapDispatchToProps=(dispatch)=>({
  actions:bindActionCreators(userAction,dispatch)
})


class LogBefore extends Component{
  constructor(){
    super();
  }
  LogRegToggle(value){
    this.props.actions.setLogReg(
      {logToggle:value,
      regToggle:!value}
    );
  }
  render(){
    return(
      <View style={styles.container}>
       <Text onPress={this.LogRegToggle.bind(this,true)} style={styles.Text}>登录</Text>
       <Text onPress={this.LogRegToggle.bind(this,false)} style={styles.Text}>注册</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    width:'100%',
    height:40,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:"center"
  },
  Text:{
    width:50,
    height:20,
    textAlign:'center',
    backgroundColor:"red",
    color:"#fff",
    borderRadius:3,
    marginRight:15,
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(LogBefore);
