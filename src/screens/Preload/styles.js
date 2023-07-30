import styled from "styled-components/native";
import {
	Title as TitlePaper,
	Button as ButtonPaper,
	TextInput as TextInputPaper,
} from "react-native-paper";

export const Container = styled.SafeAreaView`
	flex: 1;
	flex-wrap: ${(props) => props.wrap || 'nowrap'};
	flex-direction: ${(props) => (props.row ? 'row' : 'column')};
	justify-content: center;
	align-items: center;

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

	background: #f85f6a;
`

export const Logo = styled.Image`
	height: 40px;
	width: 190px;
	margin-bottom: 40px;
	margin-top: ${(props) => props.top || 0};
`

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 40px;
`