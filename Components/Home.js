import React,{Component} from 'react';
import {Button,Input,Text,Image,Avatar,Card,Rating,Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FIcon from 'react-native-vector-icons/FontAwesome5'
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native'

const data = [
    {name:"Dr. Sms",Des:'sahdflsdfs sldfjsaldf sdlkfjasd',rating:'2.5',avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
    {name:"Dr. Sms",Des:'sahdflsdfs sldfjsaldf sdlkfjasd',rating:'2.5',avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
    {name:"Dr. Sms",Des:'sahdflsdfs sldfjsaldf sdlkfjasd',rating:'2.5',avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
]
class Home extends Component{
    render(){
        
        return (
                <ScrollView style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{color:'white',fontSize:18}}>Dashboard</Text>
                        <View style={styles.iconsContainer}>
                            <View style={styles.iconBox} >
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyPatients')}>
                                    <Icon 
                                        type="entypo"  
                                        name="user" 
                                        raised 
                                        size={30}
                                        
                                         iconContainerStyle={{shadowColor: "#000",shadowOffset: {width: 0,height: 6},shadowOpacity: 0.37,shadowRadius: 7.49,elevation: 12}} 
                                    />
                                </TouchableOpacity>
                                <Text style={{fontSize:12,fontWeight:'bold'}}>My Patients</Text>
                            </View>
                            <View style={styles.iconBox}>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('UpCommingApp')}>
                                    <Icon  type="fantisto" name="history" raised size={30} />
                                </TouchableOpacity>
                                <Text style={{fontSize:12,fontWeight:'bold'}}>Appointment History</Text>
                            </View>
                            <View style={styles.iconBox}>
                                <Icon  type="entypo" name="keyboard" raised size={30} />
                                <Text style={{fontSize:12,fontWeight:'bold'}}>Statements</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.detail}>
                            <View style={{width:'49%',backgroundColor:'#3265b0',padding:15,borderRadius:10,alignItems:'center',height:'100%'}}>
                                <Icon  type="entypo" name="calendar" color="white" size={30} />
                                <Text style={{color:'white',fontSize:23,fontWeight:'bold'}}>23</Text>  
                                <Text style={{color:'white',fontSize:14}}>Total Appointments</Text>  
                            </View>
                            <View style={{width:'49%'}}>
                                <View style={{width:'100%',backgroundColor:'#3265b0',padding:10,borderRadius:10,alignItems:'center'}}>
                                    <FIcon name="money-bill" color="white" size={15} />
                                    <Text style={{color:'white',fontSize:14,fontWeight:'bold'}}>23</Text>  
                                    <Text style={{color:'white',fontSize:10}}>Total Earning</Text>
                                </View>
                                <View style={{width:'100%',backgroundColor:'#3265b0',padding:10,borderRadius:10,alignItems:'center',marginTop:5}}>
                                    <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>05</Text>  
                                    <Text style={{color:'white',fontSize:10}}>Remaining Appointments</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.Appointments}>
                            <Text style={{color:'#3265b0',fontWeight:'bold'}}>Upcomming Appointments</Text>
                            <FlatList
                                data={data}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                renderItem={({ item }) => 
                                    <Card containerStyle={{width:wp('70%'),padding:30,marginLeft:10,marginTop:30,borderRadius:10,marginRight:5,backgroundColor:'#3265b0',justifyContent:'center'}}>
                                        <Text  style={{fontSize:12,color:'#eeeeee'}}>in 3 days</Text>
                                        <Text  style={{fontSize:18,marginTop:5,fontWeight:'bold',color:'white'}}>Patient Eric Su</Text>
                                        
                                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:20,width:'100%'}}>
                                            <View style={{width:'20%',alignItems:'flex-start'}}>
                                                <Icon type="antdesign" name="calendar" size={15} color="white" />
                                            </View>
                                            <View style={{width:'80%'}}>
                                                <Text  style={{fontSize:15,color:'#eeeeee'}}>November 17</Text>
                                            </View> 
                                        </View>
                                        
                                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:10}}>
                                            <View style={{width:'20%',alignItems:'flex-start'}}>
                                                <Icon type="antdesign" name="clockcircleo" size={15} color="white" />
                                            </View>
                                            <View style={{width:'80%'}}>
                                                <Text  style={{fontSize:15,color:'#eeeeee'}}>10:00 AM</Text>
                                            </View>
                                        </View>
                                        
                                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:10}}>
                                            <View style={{width:'20%',alignItems:'flex-start'}}>
                                                <Icon type="zocial" name="call" size={15} color="white" />
                                            </View>
                                            <View style={{width:'80%'}}>
                                                <Text  style={{fontSize:15,color:'#eeeeee'}}>+1111111</Text>
                                            </View>
                                        </View>

                                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:10}}>
                                            <View style={{width:'20%',alignItems:'flex-start'}}>
                                                <FIcon name="money-bill" color="white" size={15} />
                                            </View>
                                            <View style={{width:'80%'}}>
                                                <Text  style={{fontSize:14,color:'#eeeeee'}}>$250</Text>
                                            </View>
                                        </View>
                                    </Card>
                                
                            
                                }
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </View>
                </ScrollView>
          );
    }
};



const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#f5f5f5'
  },
  header:{
      width:wp('100%'),
      height:hp('20%'),
      backgroundColor:'#3265b0',
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      position:'relative',
      padding:30
  },
  iconsContainer:{
      position:'absolute',
      top:hp('13%'),
      left:wp('0%'),
      display:'flex',
      flexDirection:'row',
      alignItems:'flex-start',
      width:wp('100%')
  },
  iconBox:{
      width:wp('33%'),
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
  },
  body:{
      marginTop:hp('15%'),
      width:wp('100%'),
      alignItems:'center'
  },
  detail:{
      width:wp('90%'),
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
  },
  Appointments:{
    width:wp('90%'),
    marginTop:50,
    marginBottom:20
  },
})


export default Home;
