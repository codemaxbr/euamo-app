import React from "react";
import {View, Image} from "react-native"
import styled from "styled-components/native"

export const BannerImage = styled.TouchableOpacity`
	height: 80px;
    background-color: #fff;
    flex-direction: row;
    width: 100%;
    border-radius: 5px;
	
    elevation: 5;
    overflow: hidden;
	box-shadow: 10px 5px 5px #000;
`

const imageUrl = "https://i.imgur.com/5mIl9hn.png";

export default () => {
    return (
        <BannerImage>
            <Image width={350} height={80} source={{uri: imageUrl}} />
        </BannerImage>
    )
}