import React from "react";
import {FlatList, Text} from "react-native"

import {Container, Touchable} from "../styles"

import EventIcon from '../../../../assets/images/icons/calendar-event.svg'
import ShopIcon from '../../../../assets/images/icons/shop.svg'
import Shop2Icon from '../../../../assets/images/icons/shop2.svg'
import ToolsIcon from '../../../../assets/images/icons/tools4.svg'
import FoodIcon from '../../../../assets/images/icons/dinner.svg'
import AutoCenterIcon from '../../../../assets/images/icons/car-repair.svg'
import HouseIcon from '../../../../assets/images/icons/house2.svg'

export default () => {
    const tipos = [
        {id: 1, name: 'Eventos', icon: 'event'},
        {id: 2, name: 'Comércios', icon: 'market'},
        {id: 3, name: 'Serviços', icon: 'services'},
        {id: 4, name: 'Restaurantes', icon: 'restaurant'},
        {id: 5, name: 'Oficinas', icon: 'autocenter'},
        {id: 6, name: 'Imóveis', icon: 'house'},
    ]

    return (
        <Container row spacing="15px 0">
            <FlatList
                data={tipos}
                keyExtractor={(item) => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingLeft: 15,
                    paddingRight: 15
                }}
                renderItem={({item, index}) => {

                    return (
                        <Touchable
                            key={index}
                            height="70px"
                            spacing="5px 0"
                            radius="8px"
                            direction="row"
                            justify="center"
                            align="center"
                            background="#fff"
                            border="1px solid #e5e5e5"
                        >
                            {item.icon === 'event' ? <EventIcon width="24px" height="24px" fill="#f85f6a" /> : ''}
                            {item.icon === 'market' ? <Shop2Icon width="24px" height="24px" color="#f85f6a" /> : ''}
                            {item.icon === 'services' ? <ToolsIcon width="24px" height="24px" fill="#f85f6a" /> : ''}
                            {item.icon === 'restaurant' ? <FoodIcon width="24px" height="24px" fill="#f85f6a" /> : ''}
                            {item.icon === 'autocenter' ? <AutoCenterIcon width="24px" height="24px" fill="#f85f6a" /> : ''}
                            {item.icon === 'house' ? <HouseIcon width="24px" height="24px" fill="#f85f6a" /> : ''}

                            <Text style={{fontWeight: 400, fontSize: 14, marginTop: 6}}>
                                {item.name}
                            </Text>
                        </Touchable>
                    )
                }}
            ></FlatList>
        </Container>
    )
}