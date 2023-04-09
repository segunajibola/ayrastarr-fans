import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <Auth0Provider
        domain="dev-cztk6zew1t53fo6u.us.auth0.com"
        clientId="tkMgPR4Ip3BGyH1FYbvvGISRarhCmw3u"
        authorizationParams={{
          // redirect_uri: window.location.origin,
          redirect_uri: "http://127.0.0.1:5173/",
        }}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </BrowserRouter>
);
