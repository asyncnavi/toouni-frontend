import LoadingOverlay from "@/components/loading-overlay"
import { useAuth } from "@/provider/auth"
import { redirect } from "next/navigation"
import { useEffect } from "react"

// FIXME : Add loading overlay

export default function withAuth(Component: React.ComponentType) {
    
    const AuthenticatedComponent = (props : any) => {

        const { state } = useAuth()

        useEffect( () => {           
            if(!state.isLoading && !state.user) {
                redirect("/")
            } 
        })


        if(state.isLoading) {
            return <LoadingOverlay loading />
        }


        if(state.user) {
            return <Component {...props} />
        }

        return null
    }


    return AuthenticatedComponent
}

