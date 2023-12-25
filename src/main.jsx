import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ModelContextProvider } from "./context/ModelContextProvider";
import { BottomMenuProvider } from "./context/BottomMenu";
import "./index.css";
import { OpenModalProvider } from "./context/OpenModalProvider";
import { AuthContextProvider } from "./context/AuthContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ModelContextProvider>
          <BottomMenuProvider>
          <OpenModalProvider>
           
            <App />
            </OpenModalProvider>
            </BottomMenuProvider>
        </ModelContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
