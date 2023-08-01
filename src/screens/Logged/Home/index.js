import React from "react";
import {ScrollView, Text, StatusBar} from "react-native"
import LocationBar from "../../../components/locationBar";
import bannerAdsTop from "../../../components/bannerAdsTop";
import TypesList from "./components/TypesList";

import {
    Container
} from './styles'
import BannerAdsTop from "../../../components/bannerAdsTop";

export default () => {
    return (
        <>
            <StatusBar backgroundColor='#d62c4e' barStyle="light-content" />
            <LocationBar />

            <ScrollView>
                <Container hasPadding>
                    <BannerAdsTop />
                    <TypesList />
                </Container>
            </ScrollView>
        </>
    )
}