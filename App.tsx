import React from 'react';
import { View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { NativeRouter as Router, Route, Switch } from 'react-router-native';
import { AuthProvider } from './src/contexts/UserContext';

import Chats from './src/components/Chats';
import Login from './src/components/Login';

const App = () => {

  return(
    <View>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </View>
  );

};


export default App;
