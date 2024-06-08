import React, { useEffect, useState } from 'react';
import {
    Alert,
    View,
    Image,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
    Linking,
    StyleSheet,
    ImageBackground
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';

const Coin = ({ navigation }) => {
    const route = useRoute();
    const { coinId } = route.params;
    const [coinData, setCoinData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoinData = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const coin = data.find(c => c.id === coinId);
                if (!coin) {
                    throw new Error('Coin not found');
                }
                setCoinData(coin);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCoinData();
    }, [coinId]);

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Error: {error.message}</Text>
            </View>
        );
    }

    return (
        <ImageBackground style={{ height:"100%"}} source={require('../assets/Login.png')} >
            <View style={styles.container}>
                <ScrollView  contentContainerStyle={styles.scrollViewContent}>
                    <Card style={styles.card}>
                        <Card.Content>
                            <Title style={styles.title}>{coinData.name} ({coinData.symbol.toUpperCase()})</Title>
                            <Image
                                source={{ uri: coinData.image }}
                                style={styles.image}
                            />
                            <Paragraph style={styles.paragraph}>Current Price: ${coinData.current_price}</Paragraph>
                            <Paragraph style={styles.paragraph}>Market Cap: ${coinData.market_cap.toLocaleString()}</Paragraph>
                            <Paragraph style={styles.paragraph}>Market Cap Rank: #{coinData.market_cap_rank}</Paragraph>
                            {coinData.fully_diluted_valuation && <Paragraph style={styles.paragraph}>Fully Diluted Valuation: ${coinData.fully_diluted_valuation.toLocaleString()}</Paragraph>}
                            <Paragraph style={styles.paragraph}>Total Volume: ${coinData.total_volume.toLocaleString()}</Paragraph>
                            <Paragraph style={styles.paragraph}>High 24h: ${coinData.high_24h}</Paragraph>
                            <Paragraph style={styles.paragraph}>Low 24h: ${coinData.low_24h}</Paragraph>
                            <Paragraph style={styles.paragraph}>Price Change 24h: ${coinData.price_change_24h}</Paragraph>
                            <Paragraph style={styles.paragraph}>Price Change Percentage 24h: {coinData.price_change_percentage_24h}%</Paragraph>
                            <Paragraph style={styles.paragraph}>Market Cap Change 24h: ${coinData.market_cap_change_24h.toLocaleString()}</Paragraph>
                            <Paragraph style={styles.paragraph}>Market Cap Change Percentage 24h: {coinData.market_cap_change_percentage_24h}%</Paragraph>
                            <Paragraph style={styles.paragraph}>Circulating Supply: {coinData.circulating_supply.toLocaleString()}</Paragraph>
                            {coinData.total_supply && <Paragraph style={styles.paragraph}>Total Supply: {coinData.total_supply.toLocaleString()}</Paragraph>}
                            {coinData.max_supply && <Paragraph style={styles.paragraph}>Max Supply: {coinData.max_supply.toLocaleString()}</Paragraph>}
                            <Paragraph style={styles.paragraph}>All-Time High: ${coinData.ath}</Paragraph>
                            <Paragraph style={styles.paragraph}>All-Time High Change Percentage: {coinData.ath_change_percentage}%</Paragraph>
                            <Paragraph style={styles.paragraph}>All-Time High Date: {new Date(coinData.ath_date).toLocaleDateString()}</Paragraph>
                            <Paragraph style={styles.paragraph}>All-Time Low: ${coinData.atl}</Paragraph>
                            <Paragraph style={styles.paragraph}>All-Time Low Change Percentage: {coinData.atl_change_percentage}%</Paragraph>
                            <Paragraph style={styles.paragraph}>All-Time Low Date: {new Date(coinData.atl_date).toLocaleDateString()}</Paragraph>
                            <Paragraph style={styles.paragraph}>Last Updated: {new Date(coinData.last_updated).toLocaleString()}</Paragraph>
                        </Card.Content>
                    </Card>
                </ScrollView>

            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '90%',
        width: '90%',
        backgroundColor: '#FFFFFF',
        margin: 20,
        borderRadius: 10,
        shadowColor: '#000000',
        alignContent: 'center',
        justifyContent:'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 18,
    },
    scrollViewContent: {
        padding: 20,
    },
    card: {
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: 'rgba(75,73,73,0.17)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 10,
    },
    urlButton: {
        margin: 20,
        alignItems: 'center',
    },
    urlIcon: {
        width: 35,
        height: 35,
    },
    urlText: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default Coin;
