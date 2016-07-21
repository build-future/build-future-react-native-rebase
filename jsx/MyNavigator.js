/**
 * Created by samuel on 16-7-21.
 */
import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View } from 'react-native';
import { __GLOBAL__ }  from './global/Constants.js';

export class MyNavigator extends Component{



    render(){

        console.log(__GLOBAL__);
        console.log(__GLOBAL__);


        return (

            <Navigator
                style={{flex:1,width:__GLOBAL__.window.width}}
                initialRoute={this.props.initialRoute}
                renderScene={this.props.renderScene}
                />

        );

    }
}