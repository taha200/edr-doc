import React,{Component,useState} from 'react';
import { GiftedChat, InputToolbar, Actions, Composer,Send, Bubble } from 'react-native-gifted-chat'
import {Button,Input,Text,Image, Icon} from 'react-native-elements';
import {View,TouchableOpacity} from 'react-native'


export const renderInputToolbar = (props) => (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: '#eeeeee',
        paddingTop: 6,
      }}
      primaryStyle={{ alignItems: 'center' }}
      accessoryStyle={{backgroundColor:'white'}}
    />
  );
  
  export const renderActions = (props) => (


      <View  style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:80}}>
        <TouchableOpacity >
            <Icon type="antdesign" name="camerao" color="#3265b0" size={25} containerStyle={{margin:0}} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Icon type="antdesign" name="camerao" color="#3265b0" size={25} containerStyle={{margin:0}} />
        </TouchableOpacity>
      </View>

    // <Actions
    //   {...props}
    //   containerStyle={{
    //     width: 50,
    //     height: 44,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginLeft: 4,
    //     marginRight: 4,
    //     marginBottom: 0,
    //   }}
    //   icon={() => (
    //     <Icon type="antdesign" name="camerao" color="#3265b0" raised  />
    //   )}
    //   options={{
    //     'Take Photo': () => {
    //       console.log('Choose From Library');
    //     },
    //     'Choose From Library': () => {
    //         console.log('Choose From Library');
    //       },
    //     Cancel: () => {
    //       console.log('Cancel');
    //     },
    //   }}
    //   optionTintColor="#222B45"
    // />
  );
  
  export const renderComposer = (props) => (
    <Composer
      {...props}
      textInputStyle={{
        color: '#222B45',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'gray',
        paddingTop: 8.5,
        paddingHorizontal: 12,
        marginLeft: 5,
      }}
    />
  );
  
  export const renderSend = (props) => (
    <Send
      {...props}
      disabled={!props.text}
      containerStyle={{
        width: 40,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4,
      }}
    >
      <Icon type="feather" name="send" color="#3265b0" size={30} />
    </Send>
  );


  export const renderBubble = (props) => (
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              backgroundColor: "#3265b0"
            }
          }}
        />
  );