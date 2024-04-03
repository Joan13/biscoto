/* eslint-disable prettier/prettier */

import { View, Text, TouchableOpacity, Button, StyleSheet, StatusBar, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

GoogleSignin.configure({
    // webClientId: GOOGLE_WEB_CLIENT_ID,
    androidClientId: "543007257309-bdlmj8v2m3ivgkhh3vurjuv94jqcgsss.apps.googleusercontent.com",
    // iosClientId: GOOGLE_IOS_CLIENT_ID,
    scopes: ['profile', 'email'],
});


const Signin = () => {

    const navigation = useNavigation();
    const [user, setuser] = useState(null);

    const setUser = async (value) => {
        try {
            await AsyncStorage.setItem('userBiscoto', value);
            // setuser(value);
        } catch (e) {
            console.log(e);
        }
    }

    const GoogleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setuser(JSON.stringify(userInfo.user));
            setUser(JSON.stringify(userInfo.user));


            setTimeout(() => {
                navigation.navigate("Home" as never);
            }, 500);

        } catch (err) {
            console.log(err);
        }
    };

    async function handleGoogleLogout() {
        try {
            await GoogleSignin.signOut();
            // Perform additional cleanup and logout operations.
            setuser(null);
            await AsyncStorage.removeItem('userBiscoto');
        } catch (error) {
            console.log('Google Sign-Out Error: ', error);
        }
    }

    const getUser = async () => {
        try {
            const userr = await AsyncStorage.getItem('userBiscoto');
            const uu = JSON.parse(userr);
            setuser(uu);

        } catch (e) {
            // return 0;
        }
    }

    useEffect(() => {
        getUser();
    }, [user]);

    return (
        <View style={styles.container}>

            <StatusBar barStyle="dark-content" backgroundColor="white" />

            <Text style={styles.text}>Welcome back</Text>
            {user !== null ? <Text style={styles.textHeader}>{user.email}</Text> : null}

            {user !== null ? <TouchableOpacity style={[{ marginVertical: 30, padding: 10, borderColor: 'rgb(230,230,230)', borderWidth: 1, borderRadius: 5 }]} onPress={handleGoogleLogout}>
                <Text>Close session</Text>
            </TouchableOpacity> : null}

            <View style={styles.viewButtons}>
                <TouchableOpacity onPress={GoogleLogin} style={styles.imageButtonWrap}>
                    <Image source={require("./../assets/google.png")} style={styles.buttonImage} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.imageButtonWrap}>
                    <Image source={require("./../assets/apple.png")} style={styles.buttonImage} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    buttonImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    viewButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000',
        fontWeight: '900',
        marginBottom: 20,
        fontSize: 25
    },
    textHeader: {
        color: 'gray',
        fontWeight: '900',
        marginBottom: 50,
        fontSize: 20
    },
    imageButtonWrap: {
        borderColor: 'rgb(230,230,230)',
        borderWidth: 1,
        height: 120,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 15
    }
});

export default Signin;
