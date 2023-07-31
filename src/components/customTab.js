import React from "react";
import {TabArea, TabItem, TextIcon} from "./styles";

import HomeIcon from '../assets/images/icons/home3.svg'
import SearchIcon from '../assets/images/icons/search.svg'
import VoucherIcon from '../assets/images/icons/ticket2.svg'
import UserIcon from '../assets/images/icons/user.svg'

export default () => {
    return (
        <TabArea>
            <TabItem>
                <HomeIcon width="24" height="24" fill="#fff" />
                <TextIcon>Início</TextIcon>
            </TabItem>

            <TabItem>
                <SearchIcon width="24" height="24" fill="#fff" />
                <TextIcon>Buscar</TextIcon>
            </TabItem>

            <TabItem>
                <VoucherIcon width="24" height="24" fill="#fff" />
                <TextIcon>Vouchers</TextIcon>
            </TabItem>

            <TabItem>
                <UserIcon width="24" height="24" fill="#fff" />
                <TextIcon>Perfil</TextIcon>
            </TabItem>
        </TabArea>
    )
}