import React,{Component} from 'react';
import {Button,Text,Input,Image,Icon, ThemeProvider} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dropdown } from 'react-native-material-dropdown';
import {
  StyleSheet,
  View,
  Picker,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import Modal from 'react-native-modal';
import firebase from 'react-native-firebase'
import baseUrl from '../constants/baseUrl'
import image from '../Images/logo.png'
import AsyncStorage from '@react-native-community/async-storage';

class SignUp extends Component{
  
  state={
    form:1,
    password:"",
    email:"",
    city:"",
    experience:"",
    gender:"",
    confirmPass:"",
    selectedItems:[],
    isModalVisible:false,
    links:[],
    degreeModal:false,
    name:"",
    items : [{
      id: '92iijs7yta',
      name: 'Anesthesiologists',
      check:false
    }, {
      id: 'a0s0a8ssbsd',
      name: 'Cardiologists',
      check:false
    }, {
      id: '16hbajsabsd',
      name: 'Colon and Rectal Surgeons',
      check:false
    }],
    degrees : [{
      id: '92iijs7yta',
      name: 'MBBS',
      check:false
    }, {
      id: 'a0s0a8ssbsd',
      name: 'BMBS',
      check:false
    }, {
      id: '16hbajsabsd',
      name: 'BDS',
      check:false
    }]

    
  }
  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@docuid',value)
      this.props.navigation.navigate("Home")

    } catch (e) {
      // saving error
    }
  }
  handleNext=()=>{
    this.setState({form:this.state.form + 1})
  }
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  toogleModalDegree=()=>{
    this.setState({degreeModal: !this.state.degreeModal});

  }
  Degrees=(e,id,plID)=>{
    var hush=this.state.degrees.map((item,index)=>{
         if(id===index){
          item.check=!e
  
            if(item.check===true){
                var arr=this.state.links
                arr.push(plID)
                this.setState({
               linka:arr
                })
            }
            else{
                var arr=this.state.links
                arr.splice(id,1)
                this.setState({
                    linka:arr
                })
            }
           return item
         }
         else{
           return item
         }
       })
    
     this.setState({
      degrees:hush
     })
      }
  Specialities=(e,id,plID)=>{
    var hush=this.state.items.map((item,index)=>{
         if(id===index){
          item.check=!e
  
            if(item.check===true){
                var arr=this.state.links
                arr.push(plID)
                this.setState({
               links:arr
                })
            }
            else{
                var arr=this.state.links
                arr.splice(id,1)
                this.setState({
                    links:arr
                })
            }
           return item
         }
         else{
           return item
         }
       })
    
     this.setState({
        items:hush
     })
      }
      SignUPvaluesToDB=(fbID)=>{
        var obj ={
        	firebaseUID:fbID,
	name:this.state.name,
	email:this.state.email,
	gender:this.state.gender,
	city:this.state.city,
	specialist:this.state.links,
	degrees:this.state.linka,
	experience:this.state.experience,
	level:"Good",
	password:this.state.password
        }
        fetch(`${baseUrl}/doctorSignUp`,{
          method:"POST",
          headers:{
        'Content-Type':'application/json'
          },
          body:JSON.stringify(obj)
        }).then(res=>res.json()).then(success=>{
          console.log(success)
          this.storeData(fbID)
    
        }).catch(err=>console.log(err))
      }
       SignUP=()=>{
         if(this.state.password===this.state.confirmPass){
          firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((success)=>this.SignUPvaluesToDB(success.user.uid)).catch(err=>alert(err))

         }
         else{
           alert("Your password doesn't match")
         }
       }
    render(){
      let data = [{
        value: 'Male',
      }, {
        value: 'Female',
      }];
     const items = [{
        id: '92iijs7yta',
        name: 'Ondo',
        check:false
      }, {
        id: 'a0s0a8ssbsd',
        name: 'Ogun',
        check:false


      }, {
        id: '16hbajsabsd',
        name: 'Calabar',
        check:false

      }];
     
        return (
            
          <ScrollView style={styles.container}>
              <View style={styles.headDesign}></View>
              <View style={styles.body}>
                  <Image source={image} style={{ width: 150, height: 150 }} />
                  <View style={{marginTop:20,width:wp('70%'),display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:25,marginBottom:10}}>Sign Up</Text>
                    <Modal isVisible={this.state.isModalVisible} >
          <View style={{backgroundColor:"white",padding:25,alignItems:'center',borderRadius:8}}>
          <Icon 
                                        type="antdesign"  
                                        name="close" 
                                        size={30}
                                        color="black"
                                        onPress={this.toggleModal}
                                  containerStyle={{alignSelf:"flex-end",marginBottom:15}}
                                  />
                                

          <FlatList 
            
                    data={this.state.items}

                    renderItem={({item,index})=>(
                     <View>
                       {(item.check)?
                                    <TouchableOpacity style={{width:wp('70%'),height:hp('6%'),backgroundColor:'#3265b0',marginTop:1,borderTopLeftRadius:(index===0)?8:0,borderTopRightRadius:(index===0)?8:0,borderBottomLeftRadius:(index===this.state.items.length-1)?8:0,borderBottomRightRadius:(index===this.state.items.length-1)?8:0,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} onPress={()=>this.Specialities(item.check,index,item.name)}>
                              <Text style={{fontSize:15,fontWeight:'bold',color:'white',marginLeft:10}}>{item.name}</Text>
                              <Icon 
                                        type="entypo"  
                                        name="check" 
                                        size={30}
                                        color="white"
                                         iconContainerStyle={{shadowColor: "#fff",shadowOffset: {width: 0,height: 6},shadowOpacity: 0.37,shadowRadius: 7.49,elevation: 12}} 
                                  containerStyle={{marginRight:10}}
                                  />
                                

                               
               
                                      </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={{width:wp('70%'),height:hp('6%'),backgroundColor:'#3265b0',marginTop:1,borderTopLeftRadius:(index===0)?8:0,borderTopRightRadius:(index===0)?8:0,borderBottomLeftRadius:(index===this.state.items.length-1)?8:0,borderBottomRightRadius:(index===this.state.items.length-1)?8:0,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} onPress={()=>this.Specialities(item.check,index,item.name)}>
                              <Text style={{fontSize:15,fontWeight:'bold',color:'white',marginLeft:10}}>{item.name}</Text>
                            

                                    </TouchableOpacity>
                               
                    }
                    
                      
              
                        </View>

                    )}

                  />
          </View>
        </Modal>
        <Modal isVisible={this.state.degreeModal} >
          <View style={{backgroundColor:"white",padding:25,alignItems:'center',borderRadius:8}}>
          <Icon 
                                        type="antdesign"  
                                        name="close" 
                                        size={30}
                                        color="black"
                                        onPress={this.toogleModalDegree}
                                  containerStyle={{alignSelf:"flex-end",marginBottom:15}}
                                  />
                                

          <FlatList 
            
                    data={this.state.degrees}

                    renderItem={({item,index})=>(
                     <View>
                       {(item.check)?
                                    <TouchableOpacity style={{width:wp('70%'),height:hp('6%'),backgroundColor:'#3265b0',marginTop:1,borderTopLeftRadius:(index===0)?8:0,borderTopRightRadius:(index===0)?8:0,borderBottomLeftRadius:(index===this.state.items.length-1)?8:0,borderBottomRightRadius:(index===this.state.items.length-1)?8:0,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} onPress={()=>this.Degrees(item.check,index,item.name)}>
                              <Text style={{fontSize:15,fontWeight:'bold',color:'white',marginLeft:10}}>{item.name}</Text>
                              <Icon 
                                        type="entypo"  
                                        name="check" 
                                        size={30}
                                        color="white"
                                         iconContainerStyle={{shadowColor: "#fff",shadowOffset: {width: 0,height: 6},shadowOpacity: 0.37,shadowRadius: 7.49,elevation: 12}} 
                                  containerStyle={{marginRight:10}}
                                  />
                                

                               
               
                                      </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={{width:wp('70%'),height:hp('6%'),backgroundColor:'#3265b0',marginTop:1,borderTopLeftRadius:(index===0)?8:0,borderTopRightRadius:(index===0)?8:0,borderBottomLeftRadius:(index===this.state.items.length-1)?8:0,borderBottomRightRadius:(index===this.state.items.length-1)?8:0,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} onPress={()=>this.Degrees(item.check,index,item.name)}>
                              <Text style={{fontSize:15,fontWeight:'bold',color:'white',marginLeft:10}}>{item.name}</Text>
                            

                                    </TouchableOpacity>
                               
                    }
                    
                      
              
                        </View>

                    )}

                  />
          </View>
        </Modal>
                      {
                        this.state.form === 1 ?
                          <>
                              <Input
                                placeholder='Name'
                                inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30}}
                                inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                onChangeText={(e)=>this.setState({
                                  name:e
                                })}                              />
                              <Input
                                placeholder='Email'
                                inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30,marginTop:10}}
                                inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                onChangeText={(val)=>this.setState({email:val})}
                                value={this.state.email}
                              />
                              <Dropdown
                                label=''
                                dropdownOffset={{ 'top': 0, 'left':0  }}
                                value="Select Gender"
                                textColor="#c4c3c3"
                                fontSize={14}
                                data={data}
                                containerStyle={{width:'90%'}}
                                inputContainerStyle={{ borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30,marginTop:10,paddingLeft:10}}
                                onChangeText={(e)=>{
                                  if(e==="Male"){
                                    this.setState({
                                    gender:true
                                    })
                                  }
                                  else{
                                    this.setState({
                                      gender:false
                                    })
                                  }
                                }
                              }
                              
                              />
                              <Input
                                placeholder='Enter City'
                                inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30,marginTop:10}}
                                inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                onChangeText={(val)=>this.setState({city:val})}
                                value={this.state.city}
                              />
                              
                              <Button 
                                title={<Text style={{color:'#3265b0'}}>Next</Text>} 
                                type="outline"
                                buttonStyle={{width:150,height:50,borderRadius:25,borderWidth:2,marginTop:30,borderColor:'#3265b0'}}  
                                onPress={this.handleNext} 
                              />
                          </>

                          : this.state.form === 2 ?
                          <>

                            <Text style={{fontSize:16}}>Edit Your Details</Text>
        
                            {/* <Dropdown
                                label=''
                                dropdownOffset={{ 'top': 0, 'left':0  }}
                                value="Select Your Specialties"
                                textColor="#c4c3c3"
                                fontSize={14}
                                data={data}
                                containerStyle={{width:'90%'}}
                                inputContainerStyle={{ borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30,marginTop:10,paddingLeft:10}}
                                
                              /> */}
                             <TouchableOpacity style={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30,marginTop:10,paddingLeft:10,alignItems:'center',justifyContent:'center',width:"90%"}} onPress={this.toggleModal}>
                               <Text style={{fontSize:14,color:'gray'}} >Select your Specialities</Text>
                             </TouchableOpacity>
                             <TouchableOpacity style={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30,marginTop:10,paddingLeft:10,alignItems:'center',justifyContent:'center',width:"90%"}} onPress={this.toogleModalDegree}>
                               <Text style={{fontSize:14,color:'gray'}} >Select your Degrees</Text>
                             </TouchableOpacity>
      
      
                              <Input
                                placeholder='Enter Your Experience in years'
                                inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30,marginTop:10,width:"100%"}}
                                inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                onChangeText={(text)=>this.setState({
                                  experience:text
                                })}
                                keyboardType="number-pad"
                             />
                              {/* <Dropdown
                              label=''
                              dropdownOffset={{ 'top': 0, 'left':0  }}
                              value="Select Your Level"
                              textColor="#c4c3c3"
                              fontSize={14}
                              data={data}
                              containerStyle={{width:'93%'}}
                              inputContainerStyle={{ borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30,marginTop:10,paddingLeft:10}}
                              
                            /> */}
                              
                              <Button 
                                title={<Text style={{color:'#3265b0'}}>Next</Text>} 
                                type="outline"
                                buttonStyle={{width:150,height:50,borderRadius:25,borderWidth:2,marginTop:30,borderColor:'#3265b0'}}  
                                onPress={this.handleNext} 
                              />
                          </>


                          :

                          <>
                              <Input
                                placeholder='Password'
                                inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30}}
                                inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                onChangeText={(val)=>this.setState({password:val})}
                                value={this.state.password}

                             />
                              <Input
                                placeholder='Confirm Password'
                                inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30,marginTop:10}}
                                inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                              onChangeText={(text)=>this.setState({confirmPass:text})}
                              />
                              <Button 
                                title={<Text style={{color:'#3265b0'}}>Sign Up</Text>} 
                                type="outline"
                                buttonStyle={{width:150,height:50,borderRadius:25,borderWidth:2,marginTop:20,borderColor:'#3265b0'}}  
                                onPress={this.SignUP}
                              />
                          </>

                      }
                  </View>
              </View>
              <View style={styles.footDesign}></View>
            </ScrollView>
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
      alignItems:'center'
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

export default SignUp;
