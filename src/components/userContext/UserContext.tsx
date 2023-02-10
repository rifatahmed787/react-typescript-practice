import { createContext, Dispatch, useState } from "react";

export type AuthUser={
    name: string
    email: string
}

type userContextType={
    user: AuthUser | null
    setUser: Dispatch<React.SetStateAction<AuthUser | null>>
}
type userContextProps={
    children:React.ReactNode
}
export const AuthContext=createContext<userContextType | null>(null)

const UserContext = ({children}:userContextProps) => {
    const [user, setUser]=useState<AuthUser | null>(null)
    return (
        <div>
            <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
        </div>
    );
};

export default UserContext;