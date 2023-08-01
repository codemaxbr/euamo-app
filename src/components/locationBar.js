import React from "react";
import {
    TopContainer, LocationArea, LocationInfo, TextHint, TextLocation, LocationFinder, NotificationButton
} from "./styles"

import {View, Text, StatusBar} from "react-native"
import LocationIcon from '../assets/images/icons/location.svg'
import NotificationIcon from '../assets/images/icons/bell.svg'

export default () => {
    return (
        <TopContainer>
            <LocationArea>
                <LocationFinder>
                    <LocationIcon width="24" height="24" fill="#fff" />
                </LocationFinder>
                <LocationInfo>
                    <TextHint>Sua região:</TextHint>
                    <TextLocation>São Gonçalo - RJ</TextLocation>
                </LocationInfo>
            </LocationArea>

            <NotificationButton>
                <NotificationIcon width="36" height="36" fill="#fff" color="#fff" />
            </NotificationButton>
        </TopContainer>
    )
}