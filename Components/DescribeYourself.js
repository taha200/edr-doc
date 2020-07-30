import React,{Component} from 'react';
import {Button,Input,Text,Image,Card,Icon} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  StyleSheet,
  View,
} from 'react-native';

class DescribeYourself extends Component{
    render(){
        return (
              <View style={styles.container}>
                  <View style={styles.headDesign}></View>
                  <View style={styles.body}>
                      <Card containerStyle={styles.card}>
                            <View style={styles.shape}>
                                <Icon type="entypo" name="user" iconStyle={{transform:[{rotate:'-45deg'}]}} size={40} color="white" />
                            </View>
                            <Button title="Describe Yourself" buttonStyle={{marginTop:100,width:250,backgroundColor:'#3265b0'}}
                                onPress={()=>this.props.navigation.navigate('DocDetailForm')}
                            />
                      </Card>
                  </View>
                  <View style={styles.footDesign}></View>
              </View>
          );
    }
};



const styles = StyleSheet.create({
  container:{
      flex:1
  },
  headDesign:{
      width:wp('30%'),
      height:hp('15%'),
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderRightWidth: 100,
      borderTopWidth: 100,
      borderRightColor: 'transparent',
      borderTopColor: '#3265b0'
  },
  body:{
      width:wp('100%'),
      height:hp('70%'),
      justifyContent:'center',
      alignItems:'center',
  },
  card:{
    width:wp('80%'),
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    paddingLeft:25,
    paddingRight:25,
    paddingTop:0,
    shadowColor: "#000",
    shadowOffset: {width: 0,height: 6},
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12
  },
  shape:{
      width:100,
      height:100,
      borderRadius:10,
      backgroundColor:'#3265b0',
      alignSelf:'center',
      marginBottom:30,
      transform:[{rotate:'45deg'}],
      alignItems:'center',
      justifyContent:'center'
  },
  footDesign:{
      width:wp('100%'),
      height:hp('15%'),
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      //borderLeftWidth:100,
      borderBottomWidth:100,
      borderRightWidth: 100,
      // borderTopWidth: 100,
      borderRightColor: 'transparent',
     // borderRightColor: 'transparent',
      borderBottomColor: '#3265b0'
      
  }
})


export default DescribeYourself;
