import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS } from '../../../constants'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../components/Pixel/Index';
import fontFamily from '../../../constants/fontFamily'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const navigation = useNavigation();

    const getGreeting = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            return "Good Morning";
        } else if (currentHour < 18) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    };


    // Dummy data for products
    const productsData = [
        {
            id: '1',
            name: 'Laundry Liquid',
            image: require('../../../assets/images/banner.jpg'),
            details: '1 liter',
        },
        {
            id: '2',
            name: 'Fabric Softener',
            image: require('../../../assets/images/banner.jpg'),
            details: '500 ml',
        },
        {
            id: '3',
            name: 'Stain Remover',
            image: require('../../../assets/images/banner.jpg'),
            details: '200 g',
        },
        {
            id: '4',
            name: 'Bleach',
            image: require('../../../assets/images/banner.jpg'),
            details: '750 ml',
        },
    ];

    const renderProductItem = ({ item }) => (
        <TouchableOpacity style={styles.product}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productText}>{item.name}</Text>
                <Text style={styles.productSubtext}>{item.details}</Text>
                <MaterialCommunityIcons
                    name="cards-heart-outline"
                    size={hp(3.3)}
                    color={COLORS.darkgray1}
                />
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGolden }}>
            <ScrollView>
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Entypo name="menu" size={hp(4)} color={COLORS.darkgray1} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>FreshWave</Text>
                        <TouchableOpacity>
                            <MaterialIcons name="chat-bubble-outline" size={hp(3.3)} color={COLORS.darkgray1} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.welcome}>
                            <Text style={styles.greeting}>{getGreeting()},</Text>
                            <Text style={styles.subtitle}>Your trusted partner in laundry care</Text>
                        </View>

                        <View style={{ marginVertical: hp(3) }}>
                            <View style={styles.banner}>
                                <Image source={require('../../../assets/images/laundry-product.png')} style={styles.bannerImage} />
                                <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
                                    <Text style={styles.bannerText}> Hello Mukesh 👋</Text>
                                    <Text style={styles.bannerSubtitle}>Discover our range of quality products</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.productsContainer}>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("ProductDetail")}>
                                <View style={styles.product}>
                                    <Image source={require('../../../assets/images/banner.jpg')} style={styles.productImage} />
                                    <View style={{ paddingHorizontal: wp(2) }}>
                                        <Text style={styles.productText}>Laundry Liquid</Text>
                                        <Text style={styles.productSubtext}>1 KG</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.7}>
                                <View style={styles.product}>
                                    <Image source={require('../../../assets/images/banner.jpg')} style={styles.productImage} />
                                    <View style={{ paddingHorizontal: wp(2) }}>
                                        <Text style={styles.productText}>Fabric Softener</Text>
                                        <Text style={styles.productSubtext}>500 ML</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.productsContainer}>
                            <TouchableOpacity activeOpacity={0.7}>
                                <View style={styles.product}>
                                    <Image source={require('../../../assets/images/banner.jpg')} style={styles.productImage} />
                                    <View style={{ paddingHorizontal: wp(2) }}>
                                        <Text style={styles.productText}>Stain Remover</Text>
                                        <Text style={styles.productSubtext}>250 ML</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.7}>
                                <View style={styles.product}>
                                    <Image source={require('../../../assets/images/banner.jpg')} style={styles.productImage} />
                                    <View style={{ paddingHorizontal: wp(2) }}>
                                        <Text style={styles.productText}>Bleach</Text>
                                        <Text style={styles.productSubtext}>500 ML</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp(4),
        marginVertical: hp(2)
    },
    headerText: {
        color: COLORS.darkgray1,
        fontFamily: fontFamily.FONTS.Medium,
        fontSize: hp(3),
        fontWeight: '700'
    },
    body: {
        marginHorizontal: wp(4),
        marginVertical: hp(1)
    },
    welcome: {
        marginHorizontal: wp(1),
        marginTop: hp(2),
    },
    greeting: {
        fontSize: hp(3.2),
        color: COLORS.darkgray1,
        fontWeight: '600',
        fontFamily: fontFamily.FONTS.Medium
    },
    subtitle: {
        fontSize: hp(2.2),
        color: COLORS.darkgray1,
        marginTop: hp(1),
        fontFamily: fontFamily.FONTS.regular
    },
    banner: {
        backgroundColor: '#c0d7d3',
        width: '100%',
        height: hp(18),
        borderRadius: wp(4),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    bannerImage: {
        width: hp(18),
        height: hp(24),
    },
    bannerText: {
        color: COLORS.darkgray1,
        fontSize: hp(3.2),
        fontFamily: fontFamily.FONTS.Medium,
        fontWeight: '600',

    },
    bannerSubtitle: {
        // paddingHorizontal: wp(2),
        paddingLeft: wp(2),
        paddingVertical: hp(1),
        color: COLORS.darkgray1,
        fontSize: hp(2),
        fontFamily: fontFamily.FONTS.regular,
        width: '98%'
    },
    productsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(2),
    },
    product: {
        backgroundColor: COLORS.tertiaryWhite,
        // alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp(3),
        padding: hp(0.5),
        paddingTop: hp(1),
        margin: wp(2),
        width: wp(43),
        height: hp(28)
    },
    productImage: {
        width: wp(40),
        height: hp(18),
        resizeMode: 'contain',
        marginBottom: hp(1),
    },
    productText: {
        fontSize: hp(2),
        fontFamily: fontFamily.FONTS.regular,
        color: COLORS.darkgray1,
    },
    productSubtext: {
        fontSize: hp(1.8),
        fontFamily: fontFamily.FONTS.regular,
        color: COLORS.darkgray1,
        marginTop: hp(0.5),
    },

})