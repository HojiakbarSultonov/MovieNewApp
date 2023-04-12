import { User, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/router"
import { ReactNode, createContext, useEffect, useMemo, useState } from "react"
import { auth } from "src/firebase"
import { useAuth } from "src/hooks/useAuth"



interface AuthContextState {
    user: User | null
    error: string
    isLoading: boolean
    signUp: (email: string, password: string) => Promise<void>
    signIn: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>

}

export const AuthContext = createContext<AuthContextState>({
    user: null,
    error: '',
    isLoading: false,
    signIn: async () => { },
    signUp: async () => { },
    logout: async () => { },
})

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [initialLoader, setInitialLoader] = useState<boolean>(true)
    const { error, isLoading, user, signIn, signUp, logout, setUser, setIsLoading} = useAuth()
    const router = useRouter()
    const value = useMemo(() => ({
        user, isLoading, logout, signIn, signUp, error
    }),
        [user, isLoading, error]
    );
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setIsLoading(false)
                setUser(user)
            } else {
                setUser(null)
                setIsLoading(true)
                router.push('/Auth')
            }
            setIsLoading(false)
            setInitialLoader(false)
        })
    }, [])

    return (
        <AuthContext.Provider value={value}>
            { !initialLoader ?  children : "Loading..."}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider