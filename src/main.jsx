import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-mpoe83wnvuglxurj.us.auth0.com"
    clientId="iPqScvQQH1WgltxrjxbZcYpueEcbzDRc"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    useRefreshTokens
    cacheLocation="localstorage"
  >
    <App />
    <Toaster position="bottom-right" reverseOrder={false} />
  </Auth0Provider>
);
