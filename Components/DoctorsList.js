import React,{Component} from 'react';
import {Button,Input,Text,Image,Icon,SearchBar,Card,Avatar,Badge,Rating } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class DoctorsList extends Component{
    state = {
        search: '',
        list : [
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
          ]
      };

    updateSearch = search => {
    this.setState({ search });
    };
    render(){

        return (
              <View style={styles.container}>
                  <View style={styles.header}>
                        <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <View style={{width:'60%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Icon type="antdesign" name="arrowleft" color="white" onPress={()=>this.props.navigation.goBack(null)} />
                                <Text style={{color:'white',fontSize:18}}>Ophthalmologist</Text>
                            </View>
                            <View style={{width:'18%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Text style={{color:'white',fontSize:14}}>Filter</Text>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Filter')}>
                                    <Icon type="antdesign" name="down" color="white" size={14} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        <View style={styles.searchBarContainer}>
                            <View style={styles.serachBox} >
                                <SearchBar
                                    placeholder="Type Here..."
                                    onChangeText={this.updateSearch}
                                    value={this.state.search}
                                    containerStyle={{width:'100%',backgroundColor:'white',borderRadius:50,borderBottomWidth:0,shadowColor: "#000",shadowOffset: {width: 0,height: 6,}, shadowOpacity: 0.37,shadowRadius: 7.49, elevation: 12}}
                                    inputContainerStyle={{borderRadius:50,backgroundColor:'white'}}
                                />
                            </View>
                        </View>
                    </View>
                    <ScrollView style={styles.listBody} >
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.list}
                            renderItem={({ item }) => (
                                <MyCard
                                
                                    Navigate={()=>this.props.navigation.navigate("DoctorDetail")}

                                />
                            )}
                        />
                    </ScrollView>
              </View>
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
    searchBarContainer:{
        position:'absolute',
        top:hp('15%'),
        left:wp('5%'),
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        width:wp('100%')
    },
    serachBox:{
        width:wp('90%'),
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    listBody:{ 
        marginTop:hp('5%')
    }
})


const MyCard=(props)=>{
    return(
        <Card containerStyle={{borderRadius:15,padding:10}}>
            <View style={{display:'flex',flexDirection:'row'}}>

                <View style={{width:'25%',alignItems:'center'}}>
                    <View style={{position:'relative'}}>
                        <Avatar
                            rounded
                            size={60}
                            source={{
                                uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                            }}
                        />
                        <Badge
                            status="success"
                            containerStyle={{ position: 'absolute', bottom:-5, right:0 }}
                            badgeStyle={{width:25,height:25,borderRadius:50}}
                            value={<Text style={{fontSize:8,color:'white'}}>97%</Text>}
                        />
                    </View>
                    <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:10}}>
                            <Rating ratingCount={1} startingValue={5} readonly minValue={5} imageSize={20} />
                            <Text style={{marginLeft:5}}>4.5</Text>
                    </View>
                    <Text style={{fontSize:10,fontWeight:'bold',marginTop:10}}>95 Feedback</Text>
                </View>
                
                <View style={{width:'75%',paddingLeft:15}}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Zeon Ranan</Text>
                    <View style={{padding:5,borderWidth:1,borderColor:'lightgray',marginTop:5}}>
                        <Text style={{fontSize:12,color:'gray'}} numberOfLines={1} >MBBS,DOMS,MS - Ophathalmology</Text> 
                        <Text style={{fontSize:12,color:'gray'}}>Ophathalmology</Text>
                        <Text style={{fontSize:12,color:'gray'}}>20 Years of experience</Text>
                    </View>
                    <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:5}}>
                        <Icon type="entypo" name="location-pin" size={16} color="gray" />
                        <Text style={{marginLeft:5,color:'gray'}}>Andheri East</Text>
                    </View>
                    <Text style={{fontSize:16,fontWeight:'bold',marginTop:5}}>$500 ownwards</Text>
                </View>

            </View>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <Badge
                    status="success"
                    badgeStyle={{backgroundColor:'transparent',borderWidth:1,borderColor:'lightgray',padding:10}}
                    value={<Text style={{fontSize:12}}>Lasik Eye Surgery</Text>}
                />
                <Badge
                    status="success"
                    
                    badgeStyle={{backgroundColor:'transparent',borderWidth:1,borderColor:'lightgray',padding:10}}
                    value={<Text style={{fontSize:12}}>Anterior Segment</Text>}
                />
                <Badge
                    status="success"
                    
                    badgeStyle={{backgroundColor:'transparent',borderWidth:1,borderColor:'lightgray',padding:10}}
                    value={<Text style={{fontSize:12}}>+2 More</Text>}
                />
            </View>
            <View style={{marginTop:10,alignItems:'flex-end'}}>
                <TouchableOpacity onPress={props.Navigate}>  
                    <Button 
                        title={<Text style={{color:'#3265b0'}}>Book Appointment</Text>} 
                        buttonStyle={{borderRadius:50,borderColor:'#3265b0'}} 
                        type="outline"   
                    />
                </TouchableOpacity>
            </View>
        </Card>
    );
}


export default DoctorsList;
