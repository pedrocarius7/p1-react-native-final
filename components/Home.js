import React, {Component} from "react";
import {Text, StyleSheet, View, Image} from 'react-native'

export default class Home extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30,}} > Bem-vindo ao Overwatch 2! </Text>
                <Image
                    source={require('../assets/Hanzo.webp')}
                    style={styles.logo}
                />
                <Text> Você foi banido dos servidores por ser main Hanzo. </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "column",
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: "space-evenly",
        fontSize: 50
      },

      logo: {
        width: 250,
        height: 300
      }
})