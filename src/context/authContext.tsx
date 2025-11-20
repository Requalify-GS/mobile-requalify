import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextData {
  token: string | null;
  userId: number | null;
  isAuthenticated: boolean;
  login: (token: string, userId: number) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    loadStoredData();
  }, []);

  const loadStoredData = async () => {
    try {
      const storedToken = await AsyncStorage.getItem("@requalify:token");
      const storedUserId = await AsyncStorage.getItem("@requalify:userId");

      if (storedToken && storedUserId) {
        setToken(storedToken);
        setUserId(Number(storedUserId));
      }
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }
  };

  const login = async (newToken: string, newUserId: number) => {
    try {
      await AsyncStorage.setItem("@requalify:token", newToken);
      await AsyncStorage.setItem("@requalify:userId", newUserId.toString());
      setToken(newToken);
      setUserId(newUserId);
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("@requalify:token");
      await AsyncStorage.removeItem("@requalify:userId");
      setToken(null);
      setUserId(null);
    } catch (error) {
      console.error("Erro ao remover dados:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        isAuthenticated: !!token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
};
