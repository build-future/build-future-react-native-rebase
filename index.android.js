/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Image,
    DrawerLayoutAndroid,
    TouchableNativeFeedback,
    TouchableHighlight
} from 'react-native';
import ToastAndroid from './native/android/DisplayToastAndroid.js';
import { MyNavigator } from './jsx/MyNavigator.js';
import {DrawerStyle} from './jsx/style/style.css.js';

class AwesomePRoject extends Component {

    press(){}


    render() {

        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#e4e4e4'}} accessible={true}>
                <View>
                    <Image style={styles.profile} source={{uri:'https://facebook.github.io/react/img/logo_og.png'}} />
                    <Text style={{}}>My Profile</Text>
                </View>
                <TouchableHighlight onPress={this.press} underlayColor="#ccc">
                    <Text style={styles.menuItem}>Settings</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.press} underlayColor="#ccc">
                    <Text style={styles.menuItem}>Default</Text>
                </TouchableHighlight>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <View style={styles.container}>
                    <MyNavigator
                        renderScene={(route, navigator) => {
                        return (
                        <View>
                        <View style={styles.nav}>
                            <TouchableHighlight  onPress={this.press} style={{borderRadius:10}}>
                                <View style={styles.navText}>
                                    <Text>&lt;</Text>
                                </View>
                            </TouchableHighlight>
                            <View style={[styles.navText,styles.navTitle]}>
                                <Text>{route.title}</Text>
                            </View>
                            <View style={styles.navText}>
                                <Text>&gt;</Text>
                            </View>
                        </View>

                        </View>
                        );
                        }}
                        initialRoute={{ title: 'Personal Profile', index: 0 }}
                    />
                </View>
            </DrawerLayoutAndroid>
        );
    }
}



const styles = StyleSheet.create(Object.assign({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    nav:{
        flex:1,
        backgroundColor:'#efefef',
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 5
    },
    navText:{
        color:'#5555aa',
        fontWeight:'bold',
        fontSize:16,
        textAlign:'left',
        borderRadius: 10,
        padding:10,
        backgroundColor: '#fff'
    },
    navTitle:{
        borderRadius: 100,
        borderWidth:0,
        backgroundColor: 'transparent',
        fontWeight:'bold'
    }

},DrawerStyle));


AppRegistry.registerComponent('AwesomePRoject', () => AwesomePRoject);
