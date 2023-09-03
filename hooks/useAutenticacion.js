import React, {useEffect, useState} from 'react';
import firebase from '../firebase';

function useAutenticacion() {
    const [useAutenticacion, guardarUsuarioAutenticado] = useState(null);
    //Guarda la sesión del usuario
    useEffect(() => {
        const unsuscribre = firebase.auth.onAuthStateChanged(usuario=> {
            if(usuario) {
                guardarUsuarioAutenticado(usuario);
            }else{
                guardarUsuarioAutenticado(null);
            }
        });
        return () => unsuscribre();
    }, []);

    return useAutenticacion;
}

export default useAutenticacion;