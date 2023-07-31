import React, {useState} from 'react';
import {Image, Text, StatusBar, TouchableOpacity} from "react-native"
import { useNavigation } from '@react-navigation/native';
import {
	Title, 
	Box, 
	Logo, 
	TextDescription, 
	BtnLogin, 
	TextRegisterLink, 
	TextInput, 
	Label, 
	TextHintSocial, 
	SocialArea, 
	BtnCadastro, 
	TextRecuperarSenha
} from './styles'
import logo from '../../assets/images/logo.png'

const Index = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false);
	const navigation = useNavigation()

	const onLogin = () => {
		setIsLoading(true);

		setTimeout(() => {
			navigation.reset({
				routes: [{name: 'MainTab'}]
			})
		}, 3000)
	}

	const goToRegister = () => {
		navigation.reset({
			routes: [{name: 'Register'}]
		})
	}

	return (
		<>
			<StatusBar backgroundColor='white' barStyle="dark-content" />

			<Box justify="center" hasPadding>
				<Logo top="30px" source={logo} />

				<Title>Entrar</Title>
				<TextDescription>Olá! Bom ver você de novo.</TextDescription>

				<Label top="30px">Endereço de e-mail</Label>
				<TextInput 
					mode="outlined" placeholder='Digite seu e-mail' autoFocus={false} 
					value={email} onChangeText={t => setEmail(t)}
				/>

				<Label>Senha</Label>
				<TextInput 
					mode="outlined" placeholder='Sua senha' secureTextEntry autoFocus={false} 
					value={password} onChangeText={t => setPassword(t)}
				/>

				<BtnLogin block loading={isLoading} disabled={isLoading} onPress={onLogin}>
					{isLoading ? "Carregando..." : "Entrar"}
				</BtnLogin>

				<SocialArea row justify="space-between">
					<TouchableOpacity onPress={() => console.log('Recuperar senha')}>
						<TextRecuperarSenha>Esqueceu sua senha?</TextRecuperarSenha>
					</TouchableOpacity>
				
					<TouchableOpacity onPress={goToRegister}>
						<TextRegisterLink>Cadastre-se</TextRegisterLink>
					</TouchableOpacity>
				</SocialArea>
			</Box>
		</>
	)
}

export default Index
