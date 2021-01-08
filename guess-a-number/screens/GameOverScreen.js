import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>The Game is Over!</TitleText>
                <View style={styles.imageContainer}>
                    <Image 
                        source={require("../assets/success.png")}
                        // source={{uri: "https://www.yourdictionary.com/images/definitions/lg/12337.summit.jpg"}}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}>
                        Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess number <Text style={styles.highlight}>{props.userNumber}</Text>.
                    </BodyText>
                </View>
                <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        width: Dimensions.get("window").width * 0.7,
        height: Dimensions.get("window").width * 0.7,
        borderRadius: Dimensions.get("window").width * 0.7/2,
        borderWidth: 3,
        borderColor: "black",
        overflow: "hidden",
        marginVertical: Dimensions.get("window").height / 30
    },
    image: {
        width: "100%",
        height: "100%",   
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get("window").height / 60
    },
    resultText: {
        textAlign: "center",
        fontSize: Dimensions.get("window").height < 600 ? 16 : 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: "open-sans-bold"
    }
});

export default GameOverScreen;