import React from 'react';
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import Routes from '../../constants/routes';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import LoginSuccess from '../LoginSuccess/LoginSuccess';
import PswdResetStack from './PswdResetStack';

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
                name={Routes.LOGIN_SUCCESS}
                component={LoginSuccess}
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
