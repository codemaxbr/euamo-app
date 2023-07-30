import * as React from 'react';
import {Image, Text} from "react-native"
import {Title, Box, Logo, TextDescription, BtnLogin, TextInput, Label} from './components/styles'
import logo from '../../assets/images/logo.png'

const Index = () => {
	const [text, setText] = React.useState('')

	return (
		<>
			<Box hasPadding>
				<Logo source={logo} />
				<Title>Entrar</Title>
				<TextDescription>Olá! Bom ver você de novo.</TextDescription>

				<Box column>
					<Label>Endereço de e-mail</Label>
					<TextInput mode="outlined" autoFocus={false} />
				</Box>

				<BtnLogin block>Entrar</BtnLogin>
			</Box>
		</>
	)
}

export default Index
