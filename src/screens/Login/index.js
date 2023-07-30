import * as React from 'react';
import {Image, Text, StatusBar} from "react-native"
import {Title, Box, Logo, TextDescription, BtnLogin, TextInput, Label, TextHintSocial, SocialArea, BtnCadastro, BtnRecuperarSenha} from './styles'
import logo from '../../assets/images/logo.png'

const Index = () => {
	const [text, setText] = React.useState('')

	return (
		<>
			<StatusBar backgroundColor='white' barStyle="dark-content" />

			<Box justify="center" hasPadding>
				<Logo top="30px" source={logo} />

				<Title>Entrar</Title>
				<TextDescription>Olá! Bom ver você de novo.</TextDescription>

				<Label top="30px">Endereço de e-mail</Label>
				<TextInput mode="outlined" autoFocus={false} />

				<Label>Senha</Label>
				<TextInput mode="outlined" secureTextEntry autoFocus={false} />

				<BtnLogin block>Entrar</BtnLogin>

				<SocialArea row justify="space-between">
					<BtnRecuperarSenha>Esqueceu sua senha?</BtnRecuperarSenha>
					<BtnCadastro>Cadastre-se</BtnCadastro>
				</SocialArea>
			</Box>
		</>
	)
}

export default Index
