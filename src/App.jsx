import React, { useState } from "react";
import Router from "./shared/Router";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query"
import { ThemeContext } from "./utils/context";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 3000,
      retry: 0,
    }
  }
});

function App() {
  const [ isDark, setIsDark ] = useState(false);
  return (
    <QueryClientProvider client ={queryClient}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
        <Router />
      </ThemeContext.Provider>
    </QueryClientProvider>
  )
}

export default App;
