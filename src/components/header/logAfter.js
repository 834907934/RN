import React,{Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class LogAfter extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={{marginRight:15}}>下午好:{this.props.username}</Text>
        <Text style={styles.Text}>退出</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:40,
    flexDirection:'row',
    justifyContent:"flex-end",
    alignItems:'center'
  },
  Text:{
    width:50,
    height:20,
    textAlign:"center",
    backgroundColor:'red',
    color:"#fff",
    borderRadius:3,
    marginRight:15
  }
})
