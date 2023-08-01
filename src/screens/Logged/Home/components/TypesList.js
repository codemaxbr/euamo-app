import React from "react";
import {FlatList, Text} from "react-native"

import {Container, Touchable} from "../styles"

export default () => {
    return (
        <Container spacing="15px 0">
            <FlatList
                data={['Eventos', 'Comércios', 'Serviços']} horizontal
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <Touchable
                        key={item}
                        width="150px"
                        height="40px"
                        spacing="0 10px 0 0"
                        radius="5px"
                        direction="column"
                        justify="center"
                        align="center"
                        background="#fff"
                    >
                        <Text style={{fontWeight: 600, fontSize: 15}}>
                            {item}
                        </Text>
                    </Touchable>
                )}
            ></FlatList>
        </Container>
    )
}