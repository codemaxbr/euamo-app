import styled from "styled-components/native";
import {
	Title as TitlePaper,
	Button as ButtonPaper,
	TextInput as TextInputPaper,
} from "react-native-paper";
import {Quicksand_700Bold} from "@expo-google-fonts/quicksand";

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
		fontSize: 18
	}
}))``

export const Logo = styled.Image`
	height: 40px;
	width: 190px;
	margin-bottom: 40px;
`
export const TextDescription = styled.Text`
	color: #989eb1;
	font-size: 16px;
	font-family: 'Quicksand_500Medium';
`

export const TextInput = styled(TextInputPaper).attrs({
	outlineColor: '#c00',
	selectionColor: '#000',
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
`
