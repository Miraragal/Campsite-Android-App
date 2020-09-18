import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { View, Platform , StyleSheet, Text, ScrollView, Image} from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent'
import {Icon} from 'react-native-elements'
import SafeAreaView from 'react-native-safe-area-view'
import { connect} from 'react-redux'; 
import { fetchCampsites, fetchComments, fetchPromotions, fetchPartners} from '../redux/ActionCreator';

const mapDispatchToProps = {
    fetchCampsites,
    fetchComments,
    fetchPromotions,
    fetchPartners
};


const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home } // screen 1
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                    name= 'home'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={()=> navigation.toggleDrawer()}
                    />

        })
    }
);


const DirectoryNavigator = createStackNavigator(
    {
        Directory: { //screen1, anadimos styles para esta screen
            screen: Directory,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name= 'list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={()=> navigation.toggleDrawer()}
                />
            })
        },  
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



const AboutNavigator= createStackNavigator (
    {
        About : { screen: About}
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                    name= 'info-circle'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={()=> navigation.toggleDrawer()}
                    />

        })
    }

)

const ContactNavigator= createStackNavigator (
    {
        Contact : { screen: Contact}
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                    name= 'address-card'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={()=> navigation.toggleDrawer()}
                    />

        })
    }

)
// TUNNING DRAWER MENU  //SafeAreaView is specific for IphoneX para garantizar area donde se debe renderizar
const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>NuCamp</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
)

// DRAWER MENU
const MainNavigator = createDrawerNavigator(
    {
        Home: { 
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Directory: { 
            screen: DirectoryNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
         },
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#CEC8FF',
        contentComponent: CustomDrawerContentComponent
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

    componentDidMount() {
        console.log('In did mount' + this.props.fetchCampsites())
        this.props.fetchCampsites();
        this.props.fetchComments();
        this.props.fetchPromotions();
        this.props.fetchPartners();
    }

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

// STYLE 
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default connect(null, mapDispatchToProps)(Main); //null para el primer valor pq no tenemos mapStateToProps