import React, { createContext, useState, useEffect } from "react";

import { initAuth0 } from "@auth0/nextjs-auth0";
import createAuth0Client from "@auth0/auth0-spa-js";

export const Auth0Context = createContext();

export function Auth0Provider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [auth0Client, setAuth0Client] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initAuth0();
    async function initAuth0() {
      const auth0 = await createAuth0Client({
        domain: process.env.domain,
        clientId: process.env.clientId,
      });
      setAuth0Client(auth0);

      const isAuthenticated = await auth0.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0.getUser();
        setUser(user);
      }

      setIsLoading(false);
    }
  }, []);

  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        login: (...p) => auth0.loginWithRedirect(...p),
      }}>
      {children}
    </Auth0Context.Provider>
  );
}
