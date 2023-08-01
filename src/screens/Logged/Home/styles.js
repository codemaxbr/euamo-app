import styled from 'styled-components/native'

export const BannerAds = styled.Image`
	height: 80px;
    background-color: #fff;
    flex-direction: row;
    width: 100%;
    border-radius: 5px;
	
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

export const Touchable = styled.TouchableOpacity`
    flex-direction: ${(props) => props.direction || 'row'};
    justify-content: ${(props) => props.justify || 'flex-start'};
    align-items: ${(props) => props.align || 'flex-start'};
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 'auto'};
    padding: ${(props) => (props.hasPadding ? '15px' : '0px')};
    margin: ${(props) => props.spacing || 0};
    background: ${(props) => props.background || 'transparent'};
    border-radius: ${(props) => props.radius || 0};
    border: ${(props) => props.border || 'none'};
    elevation: 3;
`