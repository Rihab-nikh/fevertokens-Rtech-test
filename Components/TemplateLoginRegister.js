import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, Button, Alert, ImageBackground, Image, StyleSheet} from 'react-native';

const TemplateLoginRegister = ({navigation,choice}) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        navigation.navigate('Main');
    };

    return (
        <ImageBackground source={require('../assets/Login.png')} style={styles.background}>
            <View style={styles.formContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/logo.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUserName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Button color="#BF0426" style={styles.button} title="Log In" onPress={handleSubmit} />
                <Text style={styles.loginLink}>
                    Don't have an account? <Text onPress={() => navigation.navigate(choice)} style={styles.loginLinkText}>{choice} here</Text>
                </Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: '80%',
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 89,
        borderRadius: 50,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#f5002d',
        borderWidth: 0,
        borderBottomWidth: 2,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },
    button: {
        margin: 20,
        width: '50%',
        alignItems: 'center',
    },
    loginLink: {
        textAlign: 'center',
        marginTop: 10,
    },
    loginLinkText: {
        color: '#f5002d',
        fontWeight: 'bold',
    },
});

export default TemplateLoginRegister;