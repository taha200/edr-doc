import React,{Component} from 'react';
import {Button,Input,Text,Image,Card,Icon,Divider,Badge} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList
} from 'react-native';

class DocDetailForm extends Component{

    state={
        steps:1,
        Days:[
            {day:'Mon',isSel:true,Shifts:[{shift:'Mor',isSelect:true},{shift:'Eve',isSelect:false},{shift:'Night',isSelect:false}]},
            {day:'Tue',isSel:false,Shifts:[{shift:'Mor',isSelect:true},{shift:'Eve',isSelect:false},{shift:'Night',isSelect:false}]},
            {day:'Wed',isSel:false,Shifts:[{shift:'Mor',isSelect:true},{shift:'Eve',isSelect:false},{shift:'Night',isSelect:false}]},
            {day:'Thr',isSel:false,Shifts:[{shift:'Mor',isSelect:true},{shift:'Eve',isSelect:false},{shift:'Night',isSelect:false}]},
            {day:'Fri',isSel:false,Shifts:[{shift:'Mor',isSelect:true},{shift:'Eve',isSelect:false},{shift:'Night',isSelect:false}]},
            {day:'Sat',isSel:false,Shifts:[{shift:'Mor',isSelect:true},{shift:'Eve',isSelect:false},{shift:'Night',isSelect:false}]},
            {day:'Sun',isSel:false,Shifts:[{shift:'Mor',isSelect:true},{shift:'Eve',isSelect:false},{shift:'Night',isSelect:false}]},
        ],

    }

    handleNext=()=>{
        this.setState({steps:this.state.steps + 1})
    }

    handleSelectDay=(day)=>{

        var newArr = this.state.Days.map(item=>{
            if(item.day === day)
            {
                item.isSel = !item.isSel
                
                return item
            }

            return item
        })

        this.setState({Days:newArr})
        
    }


    handleShift=(day,shift)=>{

        var newArr = this.state.Days.map(myday=>{
            if(myday.day === day)
            {
                myday.Shifts.map(item=>{

                    if(item.shift === shift)
                    {
                        
                        item.isSelect = !item.isSelect

                        return item
                    }
                    
                    
                    return item

                })

                return myday
            }

            return myday
        })


        this.setState({Days:newArr})
    }

    render(){
        return (
              <ScrollView style={styles.container}>
                  <View style={styles.headDesign}></View>
                      <View style={styles.body}>
                            <View style={styles.shape}>
                                <Icon type="entypo" name="add-user" iconStyle={{transform:[{rotate:'-45deg'}]}} size={40} color="white" />
                            </View>
                            <View style={{marginTop:20,alignItems:'center',width:'100%'}}>
                                <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                        <View style={{width:25,height:25,backgroundColor:this.state.steps >= 1 ? '#3265b0' : 'lightgray',borderRadius:50}}></View>
                                        
                                        <Divider style={{width:50,height:2,backgroundColor:this.state.steps >= 2 ? '#3265b0' : 'lightgray'}} />
                                        <View style={{width:25,height:25,backgroundColor:this.state.steps >= 2 ? '#3265b0' : 'lightgray',borderRadius:50}}></View>
                                        
                                        <Divider style={{width:50,height:2,backgroundColor:this.state.steps >= 3 ? '#3265b0' : 'lightgray'}} />
                                        <View style={{width:25,height:25,backgroundColor:this.state.steps >= 3 ? '#3265b0' : 'lightgray',borderRadius:50}}></View>
                                </View>
                                
                                {
                                    this.state.steps === 1 ?
                                        <>
                                            <Text style={{fontSize:18,fontWeight:'bold',marginTop:5}}>Enter Your Academic Detail</Text>
                                            <View style={{width:'70%',marginTop:20}}>
                                                <Input
                                                    placeholder='Your Degree Level'
                                                    inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,height:40}}
                                                    inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                                />
                                                <Input
                                                    placeholder='Last Institute'
                                                    inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,height:40,marginTop:10}}
                                                    inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                                />
                                                <Input
                                                    placeholder='Diploma'
                                                    inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,height:40,marginTop:10}}
                                                    inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                                />
                                                <Input
                                                    placeholder='Any Certificate'
                                                    inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,height:40,marginTop:10}}
                                                    inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                                />
                                                <Input
                                                    placeholder='Institute Name'
                                                    inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,height:40,marginTop:10}}
                                                    inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                                />
                                                <Input
                                                    placeholder='PMDC'
                                                    inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,height:40,marginTop:10}}
                                                    inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                                />
                                            </View>
                                        </>
                                    
                                    : this.state.steps === 2 ?

                                        <>
                                            <Text style={{fontSize:18,fontWeight:'bold',marginTop:5}}>Enter Your Experience Detail</Text>
                                            <View style={{width:'70%',marginTop:20}}>
                                                <Input
                                                    placeholder='Your Experience'
                                                    inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,height:40}}
                                                    inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                                />
                                                <Input
                                                    placeholder='Current Employment Place'
                                                    inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,height:40,marginTop:10}}
                                                    inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                                />
                                                <Input
                                                    placeholder='Your Position'
                                                    inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,height:40,marginTop:10}}
                                                    inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                                />
                                                <Input
                                                    placeholder='Date Of Joining'
                                                    inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,height:40,marginTop:10}}
                                                    inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                                />
                                                <Input
                                                    placeholder='Any Private Clinic'
                                                    inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,height:40,marginTop:10}}
                                                    inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                                />
                                            </View>
                                        </>
                                    
                                    : 

                                        <>
                                            <Text style={{fontSize:18,fontWeight:'bold',marginTop:5}}>Self Description</Text>
                                            <View style={{width:'70%',marginTop:20}}>
                                                {
                                                    <FlatList
                                                        data={this.state.Days}
                                                        showsHorizontalScrollIndicator={false}
                                                        horizontal={true}
                                                        renderItem={({ item }) => 
                        
                                                            <Button 
                                                                title={<Text style={{color:item.isSel === true ? 'white':'gray'}}>{item.day}</Text>}
                                                                buttonStyle={{backgroundColor:item.isSel === true ? '#3265b0':'transparent',borderWidth:1,borderColor:'lightgray',borderRadius:0,height:30,marginRight:5}}
                                                                onPress={()=>this.handleSelectDay(item.day)}
                                                            />
                                                                 
                                                            
                                                        }   
                                                        keyExtractor={item => item.id}
                                                    />
                                                    
                                                }
                                                <View style={{marginTop:10}}>
                                                    {
                                                        this.state.Days.map(day=>{
                                                            if(day.isSel === true)
                                                            {
                                                                return(
                                                                    <View style={{marginTop:10}}>
                                                                        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                                                            <View style={{padding:5,backgroundColor:'#3265b0',paddingLeft:20,paddingRight:20}}>
                                                                                <Text style={{color:'white',fontSize:18}}>{day.day}</Text>
                                                                            </View>
                                                                            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                                                                {

                                                                                            day.Shifts.map(item=>{

                                                                                                 return(
                                                                                                        <Button 
                                                                                                            title={<Text style={{color:item.isSelect === true ? 'white' : 'gray',fontSize:10}}>{item.shift}</Text>}
                                                                                                            buttonStyle={{backgroundColor:item.isSelect === true ?'#3265b0': 'transparent',borderWidth:1,borderColor:'lightgray',borderRadius:0,height:25,marginRight:5}}
                                                                                                            onPress={()=>this.handleShift(day.day,item.shift)}
                                                                                                        />
                                                                                                        
                                                                                                        )
                                                                                                    })
                                                                            
                                                                                }
                                                                            </View>
                                                                        </View>
                                                                        {
                                                                            day.Shifts.map(item=>{

                                                                                if(item.isSelect === true)
                                                                                {
                                                                                        return(
                                                                                            <Input
                                                                                                placeholder={item.shift +" "+'Time'}
                                                                                                inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,height:40,marginTop:5}}
                                                                                                inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                                                                            />
                                                                                            
                                                                                            )
                                                                                }
                                                                            })
                                                                        }
                                                                        
                                                                    </View>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </View>

                                                <Divider style={{marginTop:20,marginBottom:10}} />
                                                <Input
                                                    placeholder='Consultation Fee'
                                                    inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,height:40,marginTop:10}}
                                                    inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom',width:'100%'}}
                                                />
                                                <Input
                                                    placeholder='Description'
                                                    multiline={true}
                                                    numberOfLines={5}
                                                    inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,marginTop:10}}
                                                    inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'top'}}
                                                />
                                            </View>
                                        </>

                                }
                                {
                                    this.state.steps === 3 ?
                                        <Button 
                                            title="Save"
                                            buttonStyle={{width:150,height:50,borderRadius:25,borderWidth:2,marginTop:30,backgroundColor:'#3265b0'}}  
                                            onPress={()=>this.props.navigation.navigate('Home')} 
                                        />
                                    :
                                        <Button 
                                            title="Next"
                                            buttonStyle={{width:150,height:50,borderRadius:25,borderWidth:2,marginTop:30,backgroundColor:'#3265b0'}}  
                                            onPress={this.handleNext} 
                                        />
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
      marginTop:50,
      alignItems:'center',
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



export default DocDetailForm;
