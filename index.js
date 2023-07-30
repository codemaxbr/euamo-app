import {registerRootComponent} from 'expo';

import {
	useFonts,
	Quicksand_300Light,
	Quicksand_400Regular,
	Quicksand_500Medium,
	Quicksand_600SemiBold,
	Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

import {colors} from './src/assets/theme.json'

import {ThemeProvider} from 'styled-components'
import {Provider as PaperProvider, Text} from 'react-native-paper'

import Login from './src/pages/Login';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
const App = () => {
	let [fontsLoaded] = useFonts({
		Quicksand_300Light,
		Quicksand_400Regular,
		Quicksand_500Medium,
		Quicksand_600SemiBold,
		Quicksand_700Bold,
	});

	if (!fontsLoaded) {
		// splash screen
		return <Text>Font não carregada</Text>
	} else {
		return (
			<ThemeProvider theme={colors}>
				<PaperProvider>
					<Login />
				</PaperProvider>
			</ThemeProvider>
		)
	}
}

registerRootComponent(App);
