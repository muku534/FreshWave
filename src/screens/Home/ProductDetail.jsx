import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS } from '../../../constants'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../components/Pixel/Index';
import fontFamily from '../../../constants/fontFamily'

const ProductDetail = ({ navigation }) => {
    const product = {
        name: 'Laundry Liquid',
        weight: '1 liter',
        price: '$9.99',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim quis velit ultrices condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim quis velit ultrices condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim quis velit ultrices condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim quis velit ultrices condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim quis velit ultrices condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim quis velit ultrices condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim quis velit ultrices condimentum.',
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGolden }}>

            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.header}>
                        <MaterialCommunityIcons name="arrow-left" size={hp(3.3)} color={COLORS.darkgray1} />
                        <Text style={styles.headerText}>ProductDetails</Text>
                    </View>
                </TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginVertical: hp(2) }}>
                        <Image source={require('../../../assets/images/banner.jpg')} style={styles.productImage} />
                    </View>

                    <View style={styles.productInfo}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={styles.productName}>{product.name}</Text>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="cards-heart-outline" size={hp(4)} color={COLORS.darkgray1} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.productDetails}>
                            <Text style={styles.detailText}>Weight: {product.weight}</Text>
                            <Text style={styles.detailText}>Price: {product.price}</Text>
                        </View>
                        <Text style={styles.productDetails}>{product.details}</Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: wp(4),
        marginVertical: hp(2)
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        marginHorizontal: wp(4),
        color: COLORS.darkgray1,
        fontFamily: fontFamily.FONTS.Medium,
        fontSize: hp(2.4),
        fontWeight: '600'
    },
    productImage: {
        width: '100%',
        height: hp(45),
        resizeMode: 'contain',
        marginBottom: hp(1),
    },
    productInfo: {
        marginTop: hp(1),
    },
    productName: {
        fontSize: hp(3.5),
        fontFamily: fontFamily.FONTS.Medium,
        color: COLORS.darkgray1,
        marginBottom: hp(1),
        fontWeight: '700'
    },
    productDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: hp(2),
        fontFamily: fontFamily.FONTS.regular,
        color: COLORS.darkgray1,
        marginBottom: hp(1),
    },
    detailText: {
        fontSize: hp(2),
        fontFamily: fontFamily.FONTS.regular,
        color: COLORS.darkgray1,
        marginBottom: hp(0.5),
        fontWeight: '600'
    },
})