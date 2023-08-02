import React from "react";
import {ScrollView, Text, StatusBar} from "react-native"
import LocationBar from "../../../components/locationBar";
import TypesList from "./components/TypesList";
import EventCards from "./components/EventCards";
import ShopListCards from "./components/ShopListCards";
import BannerAdsTop from "../../../components/bannerAdsTop";
import HeaderTitle from "../../../components/HeaderTitle";

import {
    Container, Title, Touchable, ContainerRow, TitleArea
} from './styles'

export default () => {
    return (
        <>
            <StatusBar backgroundColor='#d62c4e' barStyle="light-content" />
            <LocationBar />

            <ScrollView>
                <Container hasPadding>
                    <BannerAdsTop />
                </Container>
                
                <Text style={{
                    marginLeft: 15, fontSize: 15, fontFamily: 'Quicksand_600SemiBold', color: '#666'
                }}>
                    O que você procura?
                </Text>
                <TypesList />

                <Container>
                    <HeaderTitle title="Próximos eventos" />
                    <EventCards />

                    <Text style={{
                        fontFamily: 'Quicksand_700Bold', fontSize: 18, color: '#333',
                        letterSpacing: -0.5, marginLeft: 15
                    }}>
                        Lojas perto de você
                    </Text>
                    <Text style={{
                        fontFamily: 'Quicksand_600SemiBold', fontSize: 14, color: '#999',
                        letterSpacing: -0.5, marginLeft: 15, marginBottom: 5
                    }}>
                        Até 1,5 km de distância
                    </Text>

                    <ShopListCards />
                    
                </Container>
            </ScrollView>
        </>
    )
}