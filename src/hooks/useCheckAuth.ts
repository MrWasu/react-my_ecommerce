import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { onAuthStateChanged } from 'firebase/auth';
//import { FirebaseAuth } from '../firebase/config';
//import { login, logout } from '../store/auth';
//import { startLoadingNotes } from '../store/diary/thunks';

// CustomHook que chequea el estado de la autentificación desde el store

export const useCheckAuth = () => {
  
    const { status } = useSelector( (state :any) => state.auth );
    const dispatch = useDispatch();

    console.log('use checkout auth')
        
    

  /*   useEffect(() => {
        
        onAuthStateChanged( FirebaseAuth, async( user:any ) => {
            if ( !user ) return dispatch( logout() );

            const { uid, email, displayName, photoURL } = user;
            dispatch( login({ uid, email, displayName, photoURL }) );
            dispatch( startLoadingNotes() );
        })
    }, []); */

    return status;
}