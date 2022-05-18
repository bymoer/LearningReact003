import React, {useContext, useState, useEffect, ReactNode, ContextType} from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useHistory } from 'react-router-native';

//Typescript requires default value - using firebase auth type "user" in context creation
const UserContext = React.createContext<FirebaseAuthTypes.User|null>(null);

//Export function for accessing user in other components
export const useAuth = () => useContext(UserContext);

// Create provider - will be wrapped around other screens / components (children) + providing context
export const AuthProvider: React.FC = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User|null>(null!);
    const history = useHistory();

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
            
            if(user){
                history.push('/chats');
            }
        })
    }, [user, history])
    
    console.log(user?.uid); // For testing.......

    return(
    
        <UserContext.Provider value={ user }>
            {!loading && children}
        </UserContext.Provider>
        
    );
    
};
