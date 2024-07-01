import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../constants';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../components/Pixel/Index';
import fontFamily from '../../../constants/fontFamily';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: COLORS.lightGolden }} behavior='position'>
            <StatusBar backgroundColor={COLORS.lightGolden} barStyle={'dark-content'} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View>
                        <Image source={require('../../../assets/images/mother-son-doing-laundry-illustration.png')} style={styles.image} />
                    </View>

                    <View style={styles.formContainer}>
                        <View>
                            <Text style={{ fontSize: hp(3.7), fontWeight: '700', color: 'black' }}>Hi Welcome Back ! 👋</Text>
                            <Text style={{ paddingVertical: hp(0.5), fontSize: hp(2.2), fontFamily: fontFamily.FONTS.bold, color: 'black' }}>Hello again you have been missed!</Text>
                        </View>

                        <View>
                            {/** <Text style={styles.label}>Email Address</Text> */}
                            <View style={styles.inputContainer}>
                                <MaterialCommunityIcons name="email-outline" size={hp(3)} color={COLORS.darkgray1} />
                                <TextInput
                                    placeholder=' Email'
                                    placeholderTextColor={'gray'}
                                    keyboardType='email-address'
                                    style={styles.textInput}
                                    value={email}
                                    onChangeText={text => setEmail(text)}
                                />
                            </View>
                        </View>

                        <View>
                            {/**   <Text style={styles.label}>Password</Text>*/}
                            <View style={styles.inputContainer}>
                                <MaterialCommunityIcons name="lock-outline" size={hp(3)} color={COLORS.darkgray1} />
                                <TextInput
                                    placeholder='Password'
                                    placeholderTextColor={'gray'}
                                    keyboardType='default'
                                    secureTextEntry
                                    style={styles.textInput}
                                    value={password}
                                    onChangeText={text => setPassword(text)}
                                />
                            </View>
                        </View>

                        <View style={{ marginVertical: hp(1), alignItems: 'flex-end' }}>
                            <Text style={styles.forgetPassword}>Forget Password?</Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>Login</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.socialButton}>
                                <Image source={require("../../../assets/images/google.png")} style={styles.socialIcon} />
                                {/**   <Text style={styles.socialText}>Google</Text> */}
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.lineText}>
                        <View style={styles.line} />
                        <Text style={styles.text}>or</Text>
                        <View style={styles.line} />
                    </View>
                    
                    <View style={styles.linkContainer}>
                        <Text style={styles.linkText}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')} style={styles.linkbutton}>
                            <Text style={styles.link}>Signup</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        marginHorizontal: wp(1),
        width: '100%',
        height: hp(42),
    },
    formContainer: {
        marginHorizontal: wp(3),
    },
    label: {
        color: 'black',
        fontSize: hp(2.2),
        fontWeight: '400',
        marginTop: hp(2.2),
        marginBottom: hp(0.8),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(1),
        width: '100%',
        height: hp(6.8),
        borderColor: COLORS.gray,
        borderWidth: 0.7,
        borderRadius: wp(2),
        // justifyContent: 'center',
        paddingLeft: wp(2),
    },
    textInput: {
        width: '100%',
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: hp(2),
    },
    loginButton: {
        backgroundColor: '#9CBCB7',
        borderRadius: wp(3),
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(65),
        marginHorizontal: wp(2)
    },
    loginButtonText: {
        fontSize: hp(2.4),
        paddingVertical: hp(1.5),
        color: COLORS.darkgray1,
        fontWeight: '600',
    },
    lineText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp(1),
        marginHorizontal: wp(4),
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.darkgray1,
    },
    text: {
        width: wp(10),
        fontSize: hp(2.4),
        color: 'black',
        textAlign: 'center',
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: hp(3),
    },
    linkText: {
        fontSize: hp(2.2),
        color: 'black',
    },
    linkbutton: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    link: {
        color: '#91b9b2',
        fontSize: hp(2.2),
        fontWeight: 'bold',
    },
    socialLoginContainer: {
        marginVertical: hp(2),
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    socialButton: {
        backgroundColor: '#c0d7d3',
        marginHorizontal: wp(3),
        height: hp(6),
        width: wp(20),
        // paddingHorizontal: wp(4),
        // flexDirection: 'row',
        borderRadius: wp(2),
        // borderWidth: hp(0.2),
        // borderColor: COLORS.gray,
        padding: hp(0.5),
        alignItems: 'center',
    },
    socialIcon: {
        height: hp(5),
        width: wp(10),
    },
    socialText: {
        fontSize: hp(2.2),
        paddingHorizontal: wp(2),
        color: COLORS.darkgray1,
    },
    forgetPassword: {
        color: '#91b9b2',
        fontSize: hp(2.1),
        fontFamily: fontFamily.FONTS.Medium,
        fontWeight: '700',
    }
});
