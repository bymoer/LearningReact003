import React, {Component, useEffect} from 'react';
import { Button, Text, View } from 'react-native';

import { onFacebookButtonPressLogout } from '../utils/FacebookButton';

import { useAuth } from '../contexts/UserContext';

const Chats: React.FC = () => {

  const user = useAuth();

  console.log(user?.uid); // For testing.........
  
  return(
    <View>
      {/* Implement getRooms function & FlatList for displaying */}
      <Text>This is CHATS page !!!</Text>
      
      <Button
          title="Facebook Sign-Out"
          onPress={() => onFacebookButtonPressLogout().then( () => console.log('Signed out of Facebook Firebase!!!!!!!') )}
      />
    </View>
  );
}

export default Chats;