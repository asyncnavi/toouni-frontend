import { createClient } from '@/utils/supabase/client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContextType, AuthState, ForgotPasswordCredentials, LoginWithPasswordCredentials, RegisterWithPasswordCredentials, initialAuthContext, initialAuthState } from './auth.types';

/* FIXME 
    Handle Errors 
*/

const AuthContext = createContext<AuthContextType>(initialAuthContext)


AuthContext.displayName = 'AuthContext'

function AuthProvider({ children } : { children : React.ReactNode }) {

    const [state,setState] = useState<AuthState>(initialAuthState)

    const supabase = createClient()



    useEffect(() =>{
        supabase.auth.getSession().then((data) => {
            
            const user = data.data.session?.user ?? null
            if(user) {
                setState({
                    user : user ?? null,
                    isAuthenticated : true,
                    isLoading : false
                })
            }
         })
        
        
        setState((prevState) => ({
            ...prevState,
            isLoading : false
        }))

        const { data : authListener } = supabase.auth.onAuthStateChange((event, session) => {

            if(session?.user) {
                setState({
                    user : session.user ?? null,
                    isAuthenticated : true,
                    isLoading : false
                })
            }           
        })   
        
        return () => {
            authListener.subscription.unsubscribe()
        }
    },[supabase.auth])


    const login =   () => {

        return {
            withPassword : async ( {email, password } : LoginWithPasswordCredentials) => {
                setState((prevState) => ({
                    ...prevState,
                    isLoading : true
                }));
        
                const { data, error  } = await supabase.auth.signInWithPassword({
                    email : email,
                    password : password,
                })
        
            
                if (error) {
                    console.log(error)
                    return 
                }
        
                setState({
                    user : data.user,
                    isAuthenticated : true,
                    isLoading : false
                })
            },

         
        }
       
    }


    const register = () => {
        return {
            withPassword : async ( {email, password } : RegisterWithPasswordCredentials) => {
                setState((prevState) => ({
                    ...prevState,
                    isLoading : true
                }));
        
                const { data, error  } = await supabase.auth.signUp({
                    email : email,
                    password : password,
                })
        
            
                if (error) {
                    console.log(error)
                    return 
                }
        
                setState({
                    user : data.user,
                    isAuthenticated : true,
                    isLoading : false
                })
            },      
        }
           
    }


    const forgotPassword = async ({ email } : ForgotPasswordCredentials ) => {
        await supabase.auth.resetPasswordForEmail(email, {
            redirectTo : 'locahost:3000'
        })
    }

    const logout = async () => {
        await supabase.auth.signOut()
        setState({
            ...initialAuthState,
            isLoading : false
        })
    }


    return <AuthContext.Provider value={{ state, login, logout, register, forgotPassword }}>
        {children}
    </AuthContext.Provider>

}

export const  useAuth = () => {
    return useContext(AuthContext)
}


export default AuthProvider