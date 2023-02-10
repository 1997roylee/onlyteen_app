import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface AuthState {
    email: string
    isLoggedIn: boolean
    authorization: string
    setAuthentification: (email: string, authorization: string) => void
}

export const useAuthStore = create(
    persist<AuthState>(
        (set) => ({
            email: '',
            isLoggedIn: false,
            authorization: '',
            setAuthentification: (email: string, authorization: string) => {
                set({
                    email,
                    isLoggedIn: true,
                    authorization,
                })
            }
        }),
        {
            name: 'auth', // unique name
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
)

export const setLoginSuccessfull = (email: string, authorization: string) => {
    useAuthStore.setState({
        email,
        isLoggedIn: true,
        authorization,
    })
}