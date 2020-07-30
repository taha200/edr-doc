import React from "react";
import {Icon} from 'react-native-elements'
import FIcon from 'react-native-vector-icons/Fontisto'
import {createStackNavigator,createAppContainer,createBottomTabNavigator,createSwitchNavigator} from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SplashScreen from "./SplashScreen";
import BuildProfileSplash from './BuildProfileSplash'
import EasyToUseSplash from './EasyToUseSplash'
import IncreaseYourCrowdSplash from './IncreaseYourCrowdSplash'
import SignInAndSignUp from './SignInAndSignUp'
import UpCommingApp from './UpCommingApp'
import PastAppointment from './PastAppointment'
import MyPatients from './MyPatients'
import DescribeYourself from './DescribeYourself'
import DocDetailForm from './DocDetailForm'
import Home from './Home'
import Chat from './Chat'
import Account from './Account'
import VideoCall from './VideoCall'
import Conversation from './Conversation'
const LogInStackNav = createStackNavigator({

    SplashScreen:{
        screen:SplashScreen
    },
    BuildProfileSplash:{
        screen:BuildProfileSplash
    },
    EasyToUseSplash:{
        screen:EasyToUseSplash
    },
    IncreaseYourCrowdSplash:{
        screen:IncreaseYourCrowdSplash
    },
    SignInAndSignUp:{
        screen:SignInAndSignUp
    },
    SignIn:{
        screen:SignIn
    },
    SignUp:{
        screen:SignUp
    },
    DescribeYourself:{
        screen:DescribeYourself
    },
    DocDetailForm:{
        screen:DocDetailForm
    }

},
{
    headerMode:'none'
}
)

const HomeStack = createStackNavigator({
    Home:{
        screen:Home
    },
    MyPatients:{
        screen:MyPatients
    },
    UpCommingApp:{
        screen:UpCommingApp
    },
    PastAppointment:{
        screen:PastAppointment
    }
},
{
    headerMode:'none'
}
)

HomeStack.navigationOptions = ({navigation})=>{
    let tabBarVisible = false;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if ( routeName == 'Home' || routeName === 'UpCommingApp' || routeName === 'PastAppointment') {
        tabBarVisible = true
    }
    return {
        tabBarVisible,
    }
}

const ChatStack = createStackNavigator({

    Conversation:{
        screen:Conversation
    },
    Chat:{
        screen:Chat
    },
    VideoCall:{
        screen:VideoCall
    }
},
{   
    headerMode:'none'
}
)

ChatStack.navigationOptions = ({navigation})=>{
    let tabBarVisible = false;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if ( routeName == 'Chat'|| routeName == "VideoCall" ) {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}



const AccountStack = createStackNavigator({

    Account:{
        screen:Account
    },
    MyPatients:{
        screen:MyPatients
    },
    UpCommingApp:{
        screen:UpCommingApp
    },
    PastAppointment:{
        screen:PastAppointment
    }
},
{
    headerMode:'none'
}
)

AccountStack.navigationOptions = ({navigation})=>{
    let tabBarVisible = false;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if ( routeName == 'Account' || routeName === 'UpCommingApp' || routeName === 'PastAppointment'){
        tabBarVisible = true
    }
    return {
        tabBarVisible,
    }
}

const TabNav = createBottomTabNavigator({
    Home:{
        screen:HomeStack,
        navigationOptions:{
            tabBarIcon:({focused})=><Icon  type="FontAwesome" name="tv" color={focused ? "#3265b0" : '#ced1e2' } />,
            tabBarOptions:{
                activeTintColor:'black',
                inactiveTintColor:'lightgray'
            }
        }
    },
    Chat:{
        screen:ChatStack,
        navigationOptions:{
            tabBarIcon:({focused})=><FIcon name="hipchat" size={25} color={focused ? "#3265b0" : '#ced1e2' } />,
            tabBarOptions:{
                activeTintColor:'black',
                inactiveTintColor:'lightgray'
            }
        }
    },
    Account:{
        screen:AccountStack,
        navigationOptions:{
            tabBarIcon:({focused})=><Icon  type="antdesign" name="user" color={focused ? "#3265b0" : '#ced1e2' } />,
            tabBarOptions:{
                activeTintColor:'black',
                inactiveTintColor:'lightgray'
            }
        }
    }
    
},

{
   tabBarOptions:{
    style: {
        backgroundColor: 'blue',
        height: 43,
      }
   }


})



const RootNav = createSwitchNavigator({
    LogInStackNav:LogInStackNav,
    TabNav:TabNav
})


export default createAppContainer(RootNav);