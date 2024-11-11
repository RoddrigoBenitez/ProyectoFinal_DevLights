// 'use client'

// import { createContext, useContext, useState, ReactNode, useEffect } from "react";

// interface AuthContextType {
//     isAuthenticated: boolean;
//     token: string | null;
//     user: any | null;
//     login: (token: string, userData: any) => void;
//     logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [token, setToken] = useState<string | null>(null);
//     const [user, setUser] = useState<any | null>(null);

//     // Función para manejar el login
//     const login = (token: string, userData: any) => {
//         if (!token || !userData) {
//           console.error("Token o datos de usuario faltantes");
//           return;
//         }
//         setToken(token);
//         setUser(userData);
//         setIsAuthenticated(true);
//         localStorage.setItem("token", token);
//       };

//     // Función para manejar el logout
//     const logout = () => {
//         setToken(null);
//         setUser(null);
//         setIsAuthenticated(false);
//         localStorage.removeItem("token");
//     };

//     // Efecto para verificar si hay un token guardado
//     useEffect(() => {
//         const savedToken = localStorage.getItem("token");
//         if (savedToken) {
//             setToken(savedToken);
//             setIsAuthenticated(true);
//             // Aquí puedes agregar lógica para recuperar datos del usuario con el token
//         }
//     }, []);

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, token, user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // Hook personalizado para consumir el contexto
// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (context === undefined) {
//         throw new Error("useAuth debe ser usado dentro de AuthProvider");
//     }
//     return context;
// };