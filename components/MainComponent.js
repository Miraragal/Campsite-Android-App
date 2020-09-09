import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Home from './HomeComponent';


const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },  //screen1
        CampsiteInfo: { screen: CampsiteInfo }  // screen 2
    }, 
    {
        initialRouteName: 'Directory',  // to indicate the first screen
        navigationOptions: {            //style for the screen-headers
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);


const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home } // screen 1
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

class Main extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       campsites: CAMPSITES,
    //       selectedCampsite: null
    //     };
    // }
    // onCampsiteSelect(campsiteId) {
    //     this.setState({selectedCampsite: campsiteId});
    // }

    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <MainNavigator />
            </View>
        );

                // {/* <Directory
                //     campsites={this.state.campsites}
                //     onPress={campsiteId => this.onCampsiteSelect(campsiteId)}
                // />
                // <CampsiteInfo
                //     campsite={this.state.campsites.filter(
                //         campsite => campsite.id === this.state.selectedCampsite)[0]}
                // /> */}
    }
}

export default Main;