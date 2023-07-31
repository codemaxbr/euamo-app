import styled from "styled-components/native";
import {
	Title as TitlePaper,
	Button as ButtonPaper,
	TextInput as TextInputPaper,
} from "react-native-paper";

export const Box = styled.View`
	flex: 1;
	flex-wrap: ${(props) => props.wrap || 'nowrap'};
	flex-direction: ${(props) => (props.row ? 'row' : 'column')};
	justify-content: ${(props) => props.justify || 'flex-start'};
	align-items: ${(props) => props.align || 'flex-start'};

	width: ${(props) => props.width || '100%'};
	max-width: ${(props) => props.width || '100%'};
	min-width: ${(props) => props.width || '100%'};

	height: ${(props) => props.height || 'auto'};
	max-height: ${(props) => props.height || 'auto'};
	min-height: ${(props) => props.height || 'auto'};

	padding: ${(props) => (props.hasPadding ? '50px' : '0px')};
	margin: ${(props) => props.spacing || 0};
	border-radius: ${(props) => (props.spacing ? '4px' : '0px' )};
	border: ${(props) => props.border || 'none' };

	background: ${props => props.theme[props.background] || props.background || '#fff'};
`

export const SocialArea = styled.View`
	flex-wrap: ${(props) => props.wrap || 'nowrap'};
	flex-direction: ${(props) => (props.row ? 'row' : 'column')};
	justify-content: ${(props) => props.justify || 'flex-start'};
	align-items: ${(props) => props.align || 'flex-start'};

	width: ${(props) => props.width || '100%'};
	max-width: ${(props) => props.width || '100%'};
	min-width: ${(props) => props.width || '100%'};

	margin-top: 20px;
`

export const Title = styled(TitlePaper)`
	color: ${(props) => props.theme[props.color || 'secondary']};
	font-size: ${(props) => (props.small ? '22px' : props.big ? '50px' : '30px')};
	padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
	letter-spacing: -0.8px;
	font-family: 'Quicksand_700Bold';
`

export const BtnLogin = styled(ButtonPaper).attrs(props => ({
	mode: props.mode || 'contained',
	width: props.block ? '100%' : 'auto',
	color: '#3d8af7',
	labelStyle: {
		fontFamily: 'Quicksand_700Bold',
		textTransform: 'none',
		letterSpacing: -1,
		fontSize: 18,
		marginBottom: 12
	},
}))`
	margin-top: 30px;
`

export const TextRegisterLink = styled.Text`
	font-family: 'Quicksand_700Bold';
	color: #f85f6a;
	font-size: 19px;
	letter-spacing: -0.5px;
`

export const TextRecuperarSenha = styled.Text`
	font-family: 'Quicksand_600SemiBold';
	color: #989eb1;
	font-size: 17px;
	letter-spacing: -0.5px;
`

export const BtnCadastro = styled(ButtonPaper).attrs(props => ({
	mode: props.mode || 'contained',
	width: props.block ? '100%' : 'auto',
	color: 'transparent',
	labelStyle: {
		fontFamily: 'Quicksand_700Bold',
		textTransform: 'none',
		letterSpacing: -0.8,
		fontSize: 19,
		marginLeft: 0,
		marginRight: 0,
		marginTop: 0,
		marginBottom: 0,
		padding: 0,
		color: '#f85f6a'
	}
}))`
	padding: 0;
	elevation: 0;
`

export const BtnRecuperarSenha = styled(ButtonPaper).attrs(props => ({
	mode: props.mode || 'contained',
	width: props.block ? '100%' : 'auto',
	color: 'transparent',
	labelStyle: {
		fontFamily: 'Quicksand_600SemiBold',
		textTransform: 'none',
		letterSpacing: -1,
		fontSize: 17,
		marginLeft: 0,
		marginRight: 0,
		marginTop: 0,
		marginBottom: 0,
		padding: 0,
		color: '#989eb1'
	}
}))`
	padding: 0;
	elevation: 0;
`

export const Logo = styled.Image`
	height: 40px;
	width: 190px;
	margin-bottom: 40px;
	margin-top: ${(props) => props.top || 0};
`
export const TextDescription = styled.Text`
	color: #989eb1;
	font-size: 18px;
	font-family: 'Quicksand_500Medium';
`

export const TextHintSocial = styled.Text`
	color: #989eb1;
	font-size: 14px;
	text-align: center;
	width: 100%;
	margin-top: 15px;
	margin-bottom: 10px;
`

export const TextInput = styled(TextInputPaper).attrs({
	outlineColor: '#ebebeb',
	selectionColor: '#000',
	activeOutlineColor: '#e0e0e0',
	theme: {
		colors: {
			background: '#f0f0f0'
		}
	}
})`
	width: 100%;
	height: 40px;
`

export const Label = styled.Text`
	font-size: 16px;
	color: #f85f6a;
	font-weight: 600;
	margin-top: ${(props) => props.top || '20px'};
`
