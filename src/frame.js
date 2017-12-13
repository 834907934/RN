import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './components/logReg/login';
import Register from './components/logReg/reg';
import LogBefore from  './components/header/logBefore';
import LogAfter from './components/header/logAfter';
//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userAction from './actions/user';


const mapStateToProps=(state)=>{
  return{
    username:state.userStore.username,
    logToggle:state.userStore.logToggle,
    regToggle:state.userStore.regToggle
  }
}

const mapDispatchToProps=(dispatch)=>({
  actions:bindActionCreators(userAction,dispatch)
})

class Frame extends Component{
  constructor(props){
    super(props);
  }
  header(){
    if(this.props.username==null){
      return(<LogBefore/>)
    }else{
      return(
        <LogAfter username={this.props.username}/>
      )
    }
  }
  showLogin(){
    if(this.props.logToggle){
      return(
        <Login/>
      )
    }
  }
  showReg(){
    if(this.props.regToggle){
      return(
        <Register/>
      )
    }
  }
  render(){
    return(
      <View>
         {this.header()}
         {this.showLogin()}
         {this.showReg()}
      </View>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Frame);
