import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { COLORS } from '../../../constants';

const SplashScreen = ({ navigation }) => {

    setTimeout(() => {
        console.log("Welcome ")
        navigation.navigate("LoginScreen");
    }, 2500);

    return (
        <SafeAreaView style={styles.container}>
            <LottieView
                source={require('../../../assets/animations/FreshWave.json')}
                autoPlay
                loop
                style={styles.animation}
                speed={2.5} // Set the speed here
            />
        </SafeAreaView>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.lightGolden,
    },
    animation: {
        width: '100%',
        height: '100%',
    },
});
