import {NavigationContainer} from '@react-navigation/native'
import MainStack from './MainStack'

export default function Router() {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}