import React, {useState, useEffect, createContext, useContext} from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../firebase"


const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const SignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
            
      })

      return unsub
    }, [])

    

    const value = {
        currentUser,
        SignUp,
        login
    }

  return <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
  
}
