import { UserType } from "@/types/api/Auth";
import { ReactNode, createContext, useState } from "react";

interface Props{
    children: ReactNode;
}

interface AuthContextType{
    isLogin: boolean;
    login:(jwt:string, user:UserType)=>void
}
const AuthContext = createContext<AuthContextType>({isLogin:false,login:()=>{}});

export function AuthContextProvider({ children }: Props) {
    

    const [isLogin, setIsLogin] = useState(false);

    const loginHandler = (jwt:string, user:UserType) => {
        window.localStorage.setItem('token', jwt);
        window.localStorage.setItem('user', JSON.stringify(user));
        setIsLogin(true);
    }
    return <AuthContext.Provider value={{ isLogin: isLogin, login:loginHandler}}>
        
        {children}
    </AuthContext.Provider>
}