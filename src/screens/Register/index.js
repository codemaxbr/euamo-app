import React, {useState} from 'react';
import {Image, Text, StatusBar, TouchableOpacity, View, ScrollView} from "react-native"
import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
	Title, 
	Box, 
	Logo, 
	CheckboxTermos, 
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
	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [convenio, setConvenio] = useState('')
	const [confirm_password, setConfirmPassword] = useState('')
	const [check_termos, setCheckTermos] = useState(false)
	const navigation = useNavigation()

	const onLogin = () => {

	}

	const goToLogin = () => {
		navigation.reset({
			routes: [{name: 'Login'}]
		})
	}

	return (
		<>
			<StatusBar backgroundColor='white' barStyle="dark-content" />

			<ScrollView>
			<Box justify="center" hasPadding>
				<Title>Cadastre-se</Title>

				<Label top="30px">Nome</Label>
				<TextInput 
					mode="outlined" placeholder='Nome e sobrenome' autoFocus={false} 
					value={nome} onChangeText={t => setNome(t)}
				/>

				<Label>Endereço de e-mail</Label>
				<TextInput 
					mode="outlined" placeholder='Digite seu e-mail' autoFocus={false} 
					value={email} onChangeText={t => setEmail(t)}
				/>

				<Label>Senha</Label>
				<TextInput 
					mode="outlined" placeholder='Sua senha' secureTextEntry autoFocus={false} 
					value={password} onChangeText={t => setPassword(t)}
				/>

				<Label>Confirme a senha</Label>
				<TextInput 
					mode="outlined" secureTextEntry autoFocus={false} 
					value={confirm_password} onChangeText={t => setConfirmPassword(t)}
				/>

				<Label>Código do convênio</Label>
				<TextInput 
					mode="outlined"
					value={convenio} onChangeText={t => setConvenio(t)}
				/>

				<CheckboxTermos 
					text='Eu concordo com os Termos de Serviço e Política de Privacidade.' 
					onPress={() => setCheckTermos(!check_termos)} 
				/>

				<BtnLogin block onPress={() => console.log('Pressed')}>Continuar</BtnLogin>

				<SocialArea row justify="space-between">
					<TextRecuperarSenha>Já possui um cadastro?</TextRecuperarSenha>
				
					<TouchableOpacity onPress={goToLogin}>
						<TextRegisterLink>Entrar</TextRegisterLink>
					</TouchableOpacity>
				</SocialArea>
			</Box>
			</ScrollView>
		</>
	)
}

export default Index
