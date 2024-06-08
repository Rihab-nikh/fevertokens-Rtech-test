import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const Main = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en', {
                    params: {
                        vs_currency: 'usd',
                        order: 'market_cap_desc',
                        per_page: 10,
                        page: 1,
                        sparkline: false,
                    },
                });
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Portfolio')}
                        style={styles.portfolioButton}
                    >
                        <Image source={require('../assets/portfolio.png')} style={styles.portfolioIcon} />
                        <Text style={styles.portfolioText}>Portfolio</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text >Loading ...</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Portfolio')}
                    style={styles.portfolioButton}
                >
                    <Image source={require('../assets/portfolio.png')} style={styles.portfolioIcon} />
                    <Text style={styles.portfolioText}>Portfolio</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1 }}>
                {data.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => navigation.navigate('Coin', { coinId: item.id })}
                        style={styles.itemContainer}
                    >
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: item.image }} />
                            <View style={styles.overlay}>
                                <Text style={styles.overlayText}>{item.name}</Text>
                            </View>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.subtitle}>Current Price: ${item.current_price}</Text>
                            <Text style={styles.subtitle}>Change (24h): {item.market_cap_change_percentage_24h}%</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        margin: 5,
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
        textAlign: 'end',
        justifyContent: 'end',
    },
    portfolioButton: {
        margin: 5,
        alignItems: 'center',
    },
    portfolioIcon: {
        width: 35,
        height: 35,
    },
    portfolioText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    overlayText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 15,
        marginBottom: 5,
        color: '#555',
    },
});

export default Main;
