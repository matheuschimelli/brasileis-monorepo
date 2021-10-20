//@ts-nocheck
import React, { useState, useContext, createContext, useEffect } from "react";
import { useCookie } from "react-use";
import { useRouter } from "next/router";

const SERVER_URL = process.env.SERVER_URL || "https://api.brasileis.com.br";
type Props = {
  children: React.ReactNode;
};

interface User {
  id: string;
  profilePicture: string;
  name: string;
  email: string;
}
interface AuthContext {
  user: User | null;
  token: string | null;
  logout?: () => void;
  showAuthPropmpt?: () => void;
}

function delete_cookie(name: string) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

const fetchUser = async (token: string) => {
  const res = await fetch(`${SERVER_URL}/api/v1/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (res.ok && data) return data;
  return null;
};

const handleGoogleResponse = async (googleToken: any) => {
  const res = await fetch(`${SERVER_URL}/api/v1/user/verify`, {
    method: "POST",
    body: JSON.stringify({
      ...googleToken,
    }),
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
  });

  const data = await res.json();

  if (res.ok && data) return data;
  return Promise.reject("Unable to request the server");
};

export const authContext = createContext<AuthContext>({} as AuthContext);

export function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState<string | null>(null);
  const [value, updateCookie, deleteCookie] = useCookie("token");
  const router = useRouter();

  const handleCallback = async (googleToken: any) => {
    const token = await handleGoogleResponse(googleToken);

    if (!token) return Promise.reject("erro de token");

    const userData = await fetchUser(token.auth_token);

    updateCookie(token.auth_token);
    localStorage.setItem("auth", JSON.stringify(userData));
    setUser(userData);
    return router.push("/painel");
  };

  const initializeGoogleAuth = () => {
    if (window.google) {
      google.accounts.id.initialize({
        client_id:
          process.env.GOOGLE_CLIENT_ID ||
          "333116093929-juqamijpbup7ju9eutj2c3ir9mrmfsvt.apps.googleusercontent.com",
        callback: handleCallback,
      });
    }
  };

  const showAuthPropmpt = () => {
    if (window.google) {
      delete_cookie("g_state");

      //@ts-ignore
      google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          console.log("skipped");
          console.log(notification);
        }
      });
    }
  };

  const renderGoogleAuthBtn = () => {
    if (window.google) {
      //@ts-ignore
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" } // customization attributes
      );
    }
  };
  const logout = () => {
    if (window.google) {
      //@ts-ignore
      google.accounts.id.disableAutoSelect();
      setUser(null);
      setToken(null);
      localStorage.removeItem("auth");
      deleteCookie();
      delete_cookie("g_state");
      router.push("/");
    }
  };

  useEffect(() => {
    initializeGoogleAuth();
    const acessToken = value;
    const userData = localStorage.getItem("auth");

    if (acessToken && userData) {
      setUser(JSON.parse(userData));
      setToken(acessToken);
    } else {
      setUser(null);
      showAuthPropmpt();
    }
  }, []);

  return {
    initializeGoogleAuth,
    showAuthPropmpt,
    renderGoogleAuthBtn,
    user,
    token,
    logout,
  };
}
export const useAuth = () => {
  return useContext<AuthContext>(authContext);
};

export function ProvideAuth({ children }: Props) {
  const { user, token, logout, showAuthPropmpt } = useProvideAuth();
  return (
    <authContext.Provider value={{ user, token, logout, showAuthPropmpt }}>
      {children}
    </authContext.Provider>
  );
}
