import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Favorite from '../screens/Favorite'
import MovieDetail from '../screens/MovieDetail'

const Stack = createNativeStackNavigator()

const FavoriteStackNavigation = (): JSX.Element => {
    return (
        <Stack.Navigator initialRouteName="Favorites">
            <Stack.Screen
                name="Favorites"
                component={Favorite}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="MovieDetail" component={MovieDetail} />
        </Stack.Navigator>
    )
}

export default FavoriteStackNavigation