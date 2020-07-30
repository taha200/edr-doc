import React,{Component} from 'react';
import {Button,Input,Text,Image,Card,Icon,Avatar,Rating} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';


const data = [
    {name:"Dr. Sms",Des:'sahdflsdfs sldfjsaldf sdlkfjasd',rating:'2.5',avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
    {name:"Dr. Sms",Des:'sahdflsdfs sldfjsaldf sdlkfjasd',rating:'2.5',avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
    {name:"Dr. Sms",Des:'sahdflsdfs sldfjsaldf sdlkfjasd',rating:'2.5',avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
]
class PastAppointment extends Component{
    render(){
        return (
              <View style={styles.container}>
                    <Text style={{fontSize:25,fontWeight:'bold',marginTop:30,alignSelf:'flex-start'}}>Past Appointments</Text>
                    <View style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:30}}>
                            <View style={{width:'50%'}}>
                                <Button title={<Text style={{color:'gray'}}>Upcomming</Text>}  
                                    buttonStyle={{backgroundColor:'lightgray',borderRadius:0,height:50,width:'100%'}} 
                                    onPress={()=>this.props.navigation.navigate('UpCommingApp')}
                                />
                            </View>
                            <View style={{width:'50%'}}>
                                <Button title={<Text style={{color:'#3265b0'}}>Past</Text>}  
                                buttonStyle={{borderRadius:0,height:50,width:'100%',backgroundColor:'white',shadowColor: "#000",shadowOffset: {width: 0,height: 6,}, shadowOpacity: 0.37,shadowRadius: 7.49, elevation: 12}} />
                            </View>
                    </View>
                    <FlatList
                        data={data}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => 
                            <Card containerStyle={{borderRadius:15,padding:10,borderWidth:1,borderColor:'#3265b0'}}>
                                <View style={{display:'flex',flexDirection:'row'}}>
                    
                                    <View style={{width:'25%',alignItems:'center'}}>
                                        <Avatar
                                            rounded
                                            size={60}
                                            source={{
                                                uri:
                                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                            }}
                                        />
                                        <Text style={{fontSize:14,fontWeight:'bold',marginTop:10}}>$250</Text>
                                    </View>
                                    
                                    <View style={{width:'75%',paddingLeft:15}}>
                                        <Text style={{fontSize:16,fontWeight:'bold'}}>Zeon Ranan</Text>
                                        <View style={{padding:5,borderWidth:1,borderColor:'lightgray',marginTop:5}}>
                                            <Text style={{fontSize:12,color:'gray'}} numberOfLines={1} >MBBS,DOMS,MS - Ophathalmology</Text> 
                                            <Text style={{fontSize:12,color:'gray'}}>Ophathalmology</Text>
                                            <Text style={{fontSize:12,color:'gray'}}>20 Years of experience</Text>
                                        </View>
                                    </View>
                    
                                </View>
                                <View style={{marginTop:10,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                                    <TouchableOpacity>  
                                        <Button 
                                            title={<Text style={{color:'#3265b0'}}>Feedback</Text>} 
                                            buttonStyle={{borderRadius:50,borderColor:'#3265b0',paddingLeft:25,paddingRight:25}} 
                                            type="outline"   
                                        />
                                    </TouchableOpacity>
                                    <Rating startingValue={5} readonly minValue={5} imageSize={18} />
                             
                                </View>
                            </Card>
                        
                    
                        }
                        keyExtractor={item => item.id}
                    />
              </View>
          );
    }
};



const styles = StyleSheet.create({
  container:{
      flex:1,
      width:wp('100%'),
      alignItems:'center',
      padding:20,
      backgroundColor:'#f5f5f5'
  }
})


export default PastAppointment;
