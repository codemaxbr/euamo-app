import React from "react";
import {TabArea, TabItem, TextIcon} from "./styles";

import HomeIcon from '../assets/images/icons/home.svg'
import HomeFilledIcon from '../assets/images/icons/home-black.svg'

import SearchIcon from '../assets/images/icons/search.svg'
import SearchFilledIcon from '../assets/images/icons/search-filled2.svg'

import VoucherIcon from '../assets/images/icons/ticket2.svg'
import VoucherFilledIcon from '../assets/images/icons/ticket-filled.svg'

import UserIcon from '../assets/images/icons/user.svg'
import UserFilledIcon from '../assets/images/icons/user-filled.svg'

export default ({state, navigation}) => {

    const goTo = (route) => {
        console.log(route)
        navigation.navigate(route)
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                {state.index === 0 ? 
                    <HomeFilledIcon width="24" height="24" fill="#666" /> : 
                    <HomeIcon width="24" height="24" />
                }
                <TextIcon>Início</TextIcon>
            </TabItem>

            <TabItem onPress={() => goTo('Search')}>
                {state.index === 1 ? 
                    <SearchFilledIcon width="24" height="24" fill="#666" /> :
                    <SearchIcon width="24" height="24" fill="#fff" />
                }
                <TextIcon>Explorar</TextIcon>
            </TabItem>

            <TabItem onPress={() => goTo('Vouchers')}>
                {state.index === 2 ? 
                    <VoucherFilledIcon width="24" height="24" fill="#666" /> :
                    <VoucherIcon width="24" height="24" fill="#fff" />
                }
                <TextIcon>Vouchers</TextIcon>
            </TabItem>

            <TabItem onPress={() => goTo('Profile')}>
                {state.index === 3 ? 
                    <UserFilledIcon width="24" height="24" fill="#666" /> :
                    <UserIcon width="24" height="24" fill="#fff" />
                }
                <TextIcon>Perfil</TextIcon>
            </TabItem>
        </TabArea>
    )
}