import styled from "styled-components/native";
import {Title as TitlePaper} from "react-native-paper";

export const Spacer = styled.View`
	width: 100%;
	height: ${(props) => props.size || '20px'};
`
export const TabArea = styled.View`
    height: 60px;
    background-color: #fff;
    flex-direction: row;
`
export const TabItem = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	align-items: center;
`
export const TextIcon = styled.Text`
	font-family: 'Quicksand_600SemiBold'
`