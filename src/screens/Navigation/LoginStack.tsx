import React from 'react';
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import Routes from '../../constants/routes';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import PswdResetStack from './PswdResetStack';
import MainStack from './MainStack';

const LoginStack = ({ navigation }: any) => {
    const stack = createStackNavigator();

    return (
        <stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
            <stack.Screen
                options={{
                    animationEnabled: false,
                }}
                name={Routes.LOGIN}
                component={Login}
            />
            <stack.Screen
                options={{
                    animationEnabled: false,
                }}
                name={Routes.SIGNUP}
                component={Signup}
            />
            <stack.Screen
                options={{
                    animationEnabled: false,
                }}
                name={Routes.MAIN_STACK}
                component={MainStack}
            />
            <stack.Screen
                options={{
                    animationEnabled: false,
                }}
                name={Routes.RESET_STACK}
                component={PswdResetStack}
            />
        </stack.Navigator>
    );
};
export default LoginStack;
