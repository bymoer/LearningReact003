import React, { useEffect } from 'react';
import { Alert, Text, View, Button } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth';

import { onGoogleButtonPress } from '../utils/GoogleButton';
import { onFacebookButtonPress } from '../utils/FacebookButton';
import { useAuth } from '../contexts/UserContext';


const Login: React.FC = () => {

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['email'],
            webClientId: '<WEBCLIENT ID>',
            offlineAccess: true,
        });
    }, [] );


    return(
        <View>
               
            <Button
                title="Facebook Sign-In"
                onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
            />

            <Button
                title="Google Sign In"
                onPress={() => onGoogleButtonPress().then( () => console.log('Google Sign In Button pressed !') )}
            />

              
      </View>
    );
}

export default Login;