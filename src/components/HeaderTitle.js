import React from "react";
import {
    TopContainer, LocationArea, Touchable, LinkMore, TextLocation, LocationFinder, NotificationButton
} from "./styles"

import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import LocationIcon from '../assets/images/icons/location.svg'
import NotificationIcon from '../assets/images/icons/bell.svg'

export default ({title}) => {
    return (
        <TopContainer>
            <LocationArea>
                <Text style={styles.title}>{title}</Text>
            </LocationArea>

            <TouchableOpacity>
                <LinkMore>Ver mais</LinkMore>
            </TouchableOpacity>
        </TopContainer>
    )
}

const styles = StyleSheet.create({
    verMais: {
        fontSize: 16,
        fontWeight: 600,
    },

    title: {
        fontFamily: 'Quicksand_700Bold',
        fontSize: 18,
        color: '#333',
        letterSpacing: -0.5
    },
});