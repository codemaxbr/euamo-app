import React, {useEffect} from 'react';
import {StyleSheet, Text, StatusBar} from 'react-native';
import { Container, Logo, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import logo from '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native';

export default function App() {

	const navigation = useNavigation()

	useEffect(() => {
		const checkToken = async () => {
			const token = await AsyncStorage.getItem('token')
			if (token !== null) {
				// validar o token
			} else {
				navigation.navigate('Login')
			}
		}

		checkToken()
	}, [])

	return (
		<Container hasPadding>
			<StatusBar backgroundColor='#c00' />

			<Logo top="30px" source={logo} />
			<LoadingIcon color="#fff" size="large" />
		</Container>
	);
}