import styled from "styled-components/native";
import {Title as TitlePaper} from "react-native-paper";

export const TopContainer = styled.SafeAreaView`
	flex-direction: row;
	width: 100%;
	
	padding: 15px;
	background: #d62c4e;

	elevation: 20;
	box-shadow: 10px 5px 5px #000;
`

export const Container = styled.View`
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

	padding: ${(props) => (props.hasPadding ? '15px' : '0px')};
	margin: ${(props) => props.spacing || 0};
	border-radius: ${(props) => (props.spacing ? '4px' : '0px' )};
	border: ${(props) => props.border || 'none' };
`

export const TabArea = styled.View`
    height: 60px;
    background-color: #fff;
    flex-direction: row;
	borderTopWidth: 1px;
	borderColor: #ddd;
	borderStyle: solid;
	elevation: 20;
	box-shadow: 10px 5px 5px #000;
`
export const TabItem = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	align-items: center;
`
export const TextIcon = styled.Text`
	font-family: 'Quicksand_600SemiBold';
	font-size: 13px;
	color: #333;
`

export const LocationArea = styled.View`
	height: 40px;
	flex-direction: row;
	align-items: center;
	
	flex: 1;
	margin-right: 15px;
`

export const LocationInfo = styled.View`
	margin-left: 8px;
`

export const TextHint = styled.Text`
	color: #fc818a;
`

export const TextLocation = styled.Text`
	color: #fff;
	fontWeight: 600;
	font-size: 16px;
	margin-top: -2px;
`

export const NotificationButton = styled.TouchableOpacity`
	
	padding: 1px;
	width: 40px;
	height: 40px;
	border-radius: 40px;
	
	
	borderWidth: 1px;
	borderColor: #fc818a;
	borderStyle: solid;
`

export const LocationInput = styled.TextInput`
	flex: 1;
	font-size: 14px;
	color: #000;
	margin-left: 5px;
`

export const LocationFinder = styled.TouchableOpacity`
	width: 24px;
	height: 24px;
`