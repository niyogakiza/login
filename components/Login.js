import React, {Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Inputform}>
                    <TextInput
                        style={styles.input}
                        placeholder="username"
                    />
                </View>
                <View style={styles.Inputform}>
                    <TextInput
                        style={styles.input}
                        placeholder="password"
                    />
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}> Login </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginBottom: 100
    },
    input:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor:'rgba(255,255,255, 0.8)',
        paddingLeft: 30
    },
    btn: {
        backgroundColor: '#F04903',
        paddingVertical: 15
    },
    text: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    Inputform: {
        paddingTop: 10,
        paddingBottom: 10
    }
});
export default Login;