import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

export const onGoogleButtonPress = async () => {
  
  try{
    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCredential);

  } catch(error : any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED){
      console.log('Sign in cancelled');
    } else if (error.code === statusCodes.IN_PROGRESS){
      console.log('Signin in progress');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
      console.log('Play services not available');
    } else {
      console.log('Strange Error: ' + error);
    }
  }
  
}

