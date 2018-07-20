import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Dimensions,KeyboardAvoidingView } from 'react-native'

import Login from './Login';



class Myform extends Component {
    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('./image/bmw_logo.png')}
                    />
                    <Text style={styles.text}>Login Form</Text>
                </View>
                <Login />
            </KeyboardAvoidingView>
        )
        }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2980b9',
        paddingTop: 50,
        width: Dimensions.get('window').width,
    },
    logoContainer:{
        flexGrow: 1,
        alignItems:'center',
        justifyContent:'center',
        paddingTop: 100
    },
    text: {
        flex: 1,
        fontSize: 30,
        alignItems:'center',
        marginLeft: 20,
        marginTop: 40
    },
    logo: {
        width: 200,
        height: 200,
    }
});
export default Myform;