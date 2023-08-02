import React from "react";
import {FlatList, Image, Text} from "react-native"

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
        {id: 5, name: 'Oficinas', image: 'https://i.imgur.com/SNZxqhr.jpeg'},
        
        {id: 2, name: 'Comércios', image: 'https://i.imgur.com/5ocDIEZ.jpeg'},
        {id: 3, name: 'Serviços', image: 'https://i.imgur.com/F7rj2e9.jpeg'},
        {id: 4, name: 'Restaurantes', image: 'https://i.imgur.com/evhDZBB.jpeg'},
        
    ]

    return (
        <Container>
            <FlatList
                data={tipos} horizontal
                keyExtractor={(item) => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingLeft: 15,
                    paddingRight: 5,
                    paddingTop: 0,
                    paddingBottom: 20
                }}
                renderItem={({item, index}) => {

                    return (
                        <Touchable
                            key={index}
                            width="270px"
                            height="250px"
                            spacing="0 10px 0 0"
                            radius="10px"
                            direction="column"
                            justify="center"
                            align="center"
                            background="#fff"
                            border="1px solid #e5e5e5"
                            style={{
                                overflow: 'hidden', elevation: 3
                            }}
                        >
                            {item.icon === 'event' ? <EventIcon width="24px" height="24px" fill="#f85f6a" /> : ''}
                            {item.icon === 'market' ? <Shop2Icon width="24px" height="24px" color="#f85f6a" /> : ''}
                            {item.icon === 'services' ? <ToolsIcon width="24px" height="24px" fill="#f85f6a" /> : ''}
                            {item.icon === 'restaurant' ? <FoodIcon width="24px" height="24px" fill="#f85f6a" /> : ''}
                            {item.icon === 'autocenter' ? <AutoCenterIcon width="24px" height="24px" fill="#f85f6a" /> : ''}
                            {item.icon === 'house' ? <HouseIcon width="24px" height="24px" fill="#f85f6a" /> : ''}

                            <Image width={270} height={249} source={{uri: item.image}} />
                        </Touchable>
                    )
                }}
            ></FlatList>
        </Container>
    )
}